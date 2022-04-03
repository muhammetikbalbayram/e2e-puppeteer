const assert = require('assert').strict;

/**
 * Checks if an cookie does, or does not, exist on the page. 
 * @param {String} cname Cookie name to check for.
 * @param {boolean} shouldCookieExist The string "not" to negate the check (cookie value should not exist).
 */
module.exports = async function(cname, shouldCookieExist) {
 
  let cookieNameFound;
  const pageCookies = await this.page.cookies();

  for (let index = 0, length = pageCookies.length; index < length; index++) {
    const element = pageCookies[index];
    cookieNameFound = element.name === cname;
    if(cookieNameFound){
      break;
    } 
  }

  assert.strictEqual(cookieNameFound, shouldCookieExist , `Expected "${cname}" to ${shouldCookieExist ? 'exists' : 'not exists'}`);
};
