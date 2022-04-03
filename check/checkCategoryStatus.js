const assert = require("assert").strict;

module.exports = async function checkCategoryStatus(selector, categoryName, status) {
  const result = await this.page.evaluate((selector, categoryName, status) => Array.from(
    document.querySelectorAll(selector),
    element => {
      const c = element.textContent;
      let split = c.split("\n");
      split = split.map(category => category.trim());

      for (let i = 0; i < split.length - 1; i++) {
        if (split[i] === categoryName && split[i + 1].includes(status)) {
          return true;
        }
      }
      return false;
    }), selector, categoryName, status);

  assert.equal(result[0], true, "Category status does not match. Expected: " + status)
};