const waitForSelector = require('./waitForSelector');

module.exports = async function(selector, timeout = 30) {
  await waitForSelector.call(this, selector, timeout)
  /* istanbul ignore next */  // Required otherwise code coverage evaluation fails within $eval calls
  return this.page.$eval(selector, el => {
    return el.textContent.toString().trim();
  });
};
