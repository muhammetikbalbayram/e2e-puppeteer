const assert = require('assert').strict;
const waitForSelector = require('../action/waitForSelector');

/**
 * Checks the value of an element's attribute.  Fails if the element or attribute does not exist.
 * @param {String} selector CSS selector of the element to check the property of.
 * @param {String} not The string "not" to negate the check (should not match the property value).
 * @param {String} className Expected className value to check for.
 */
module.exports = async function(selector, not, className) {
  await waitForSelector.call(this, selector);
  const classList = await this.page.$eval(selector, el =>  el.classList);
  const shouldHasClass = !not;

  assert.strictEqual(Object.values(classList).includes(className), shouldHasClass, `Expected "${selector}" to ${shouldHasClass ? 'have class' : 'have no class'} ${className}`)
}