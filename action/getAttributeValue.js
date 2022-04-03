const waitForSelector = require('./waitForSelector');

module.exports = async function(selector, attributeName,  timeout = 30) {
  await waitForSelector.call(this, selector, timeout)
  /* istanbul ignore next */  // Required otherwise code coverage evaluation fails within $eval calls

  return await this.page.$eval(selector, (el, attribute) => {
    return el.getAttribute(attribute);
  }, attributeName);
};
