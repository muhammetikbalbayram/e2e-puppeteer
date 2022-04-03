/**
 * Wait for a selector to exist.
 * @param {String} selector The selector to wait for.
 * @param {Number} timeout The number of seconds to wait.
 */
module.exports = async function(selector) {
    await this.page.waitForSelector(selector);
};
