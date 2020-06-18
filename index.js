'use strict'

const {
  memoizeOne
} = require('@metascraper/helpers')

const regex = /In Stock/g;

const REGEX_KYOSHOAMERICA_URL = /(https?:\/\/(.+?\.)?kyoshoamerica\.com(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/

const isValidUrl = memoizeOne(({ url }) => REGEX_KYOSHOAMERICA_URL.test(url))

/**
 * A set of rules we want to declare under `metascraper-kyosho` namespace.
 *
**/
module.exports = () => {
  const rules = {
    availability: ({ htmlDom: $, url }) => (($('div#availability').text().matchAll(regex) === null) || false),
    quantity: ({ htmlDom: $, url }) => 0
  }

  rules.test = isValidUrl

  return rules
}

module.exports.isValidUrl = isValidUrl