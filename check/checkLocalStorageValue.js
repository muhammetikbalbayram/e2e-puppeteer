const assert = require('assert').strict;

/**
 * Checks if a given cookie does match, or does not match, with its expected value.
 * Throws an error if the cookie name is not defined in the document.
 * @param {String} key LocalStorage key to check for.
 * @param {String} value LocalStorage value to check for.
 * @param {boolean} shouldValueBeEqual The value "shouldValueBeEqual" to negate the check (LocalStorage value should not match).
 */
module.exports = async function (key, value, shouldValueBeEqual) {
    let localStorageValue = await this.page.evaluate((key, value) => {
        return localStorage.getItem(key)
    }, key, value);

    assert.strictEqual(localStorageValue === value, shouldValueBeEqual, `Expected "${value}" to ${shouldValueBeEqual ? 'have' : 'not have'} a value of "${value}"`);
};
