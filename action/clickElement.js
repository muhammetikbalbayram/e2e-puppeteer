/**
 * Clicks on an item.
 * @param {String} selector CSS selector of the item to click.
 * @param {String} waitForSelector If not null, the selector that should exist after the click.
 * test should allow to complete.
 */
module.exports = async function (selector, waitForSelector) {
    // Wait until the given selector exists
    if (waitForSelector) {
        await this.page.waitForSelector(waitForSelector);
        // Nothing to wait for, just click
    }
    await this.page.click(selector);
};
