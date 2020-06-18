'use strict'

const { memoizeOne } = require('@metascraper/helpers')
const { parse } = require('tldts')

const isValidUrl = memoizeOne(
  ({ url }) => getDomainWithoutSuffix(url) === 'kyoshoamerica'
)

/**
 * A set of rules we want to declare under `metascraper-kyosho` namespace.
 *
**/
module.exports = () => {
  const rules = {
    availability: ({ htmlDom: $, url }) => (($('div#availability').text() === "In Stock") || false),
    quantity: ({ htmlDom: $, url }) => 0
  }

  rules.test = isValidUrl

  return rules
}

module.exports.isValidUrl = isValidUrl