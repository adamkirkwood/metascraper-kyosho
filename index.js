'use strict'

const regex = /In Stock/g;

/**
 * A set of rules we want to declare under `metascraper-kyosho` namespace.
 *
**/
module.exports = () => {
  const rules = {
    availability: ({ htmlDom: $, url }) => (($('div#availability').text().matchAll(regex) === null) || false),
    quantity: 0
  }
  return rules
}