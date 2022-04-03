module.exports = async function (selector, value) {
    await this.page.focus(selector);
    for (let i = 0; i < value.length; i++) {
        await this.page.keyboard.press('Backspace');
    }
}