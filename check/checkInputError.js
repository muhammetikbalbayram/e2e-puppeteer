const checkElementText = require('./checkElementText');
const checkHasClass = require("./checkHasClass");

module.exports = async function (selector, text, not=false) {
    selector += ' .v-text-field__details';
    await checkHasClass.call(this,selector + ' >div', not, 'error--text')
    await checkElementText.call(this, selector, not, text);
}
