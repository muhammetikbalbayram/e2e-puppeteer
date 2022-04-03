const {Given} = require('@cucumber/cucumber');

const checkAccessibility = require('../check/checkAccessibility');
const checkAttribute = require('../check/checkAttribute');
const checkAttributeContains = require('../check/checkAttributeContains');
const checkContainsText = require('../check/checkContainsText');
const checkElementEnabled = require('../check/checkElementEnabled');
const checkElementExists = require('../check/checkElementExists');
const checkElementValue = require('../check/checkElementValue');
const checkElementVisible = require('../check/checkElementVisible');
const checkIsEmpty = require('../check/checkIsEmpty');
const checkUrl = require('../check/checkUrl');
const checkHasFocus = require("../check/checkHasFocus");
const checkIsChecked = require('../check/checkIsChecked');
const checkCookieExists = require("../check/checkCookieExists");
const checkCookieValue = require("../check/checkCookieValue");
const checkScreenshot = require("../check/checkScreenshot");
const openUrl = require('../action/openUrl');
const checkTitleContains = require("../check/checkTitleContains");
const checkUrlContains = require("../check/checkUrlContains");

Given(
    'the url {string-env} is opened', async function (url) {
        await openUrl.call(this, url);
    }
);

Given(
    'the url {string-env} with user agent {string} is opened', async function (url, userAgent) {
        await openUrl.call(this, url, userAgent);
    }
);

Given(
    'the url {string-env} with device {string} is opened', async function (url, device) {
        await openUrl.call(this, url, null, device);
    }
);

Given(
    /^the element "([^"]*)" is( not)? visible$/, async function (selector, not) {
        await checkElementVisible.call(this, selector, not);
    }
);

Given(
    /^the element "([^"]*)" is( not)? visible after "([^"]*)" seconds$/, async function (selector, not, seconds) {
        await checkElementVisible.call(this, selector, not, seconds);
    }
);

Given(
    /^the element "([^"]*)?" value is( not)? "([^"]*)?"$/,
    checkElementValue
);

Given(
    /^the page url is( not)? "([^"]*)?"$/,
    checkUrl
);

Given(
    /^the attribute "([^"]*)?" from element "([^"]*)?" is( not)? "([^"]*)?"$/,
    checkAttribute
);

Given(
    /^the attribute "([^"]*)?" from element "([^"]*)?"( not)? contain "([^"]*)?"$/,
    checkAttributeContains
);

Given(
    /^the element "([^"]*)"( does not)? contains? text "([^"]*)"$/,
    checkContainsText
);

Given(
    /^element "([^"]*)?" is( not)? on the page$/,
    checkElementExists
);

Given(
    /^the element "([^"]*)?" is( not)? empty$/,
    checkIsEmpty
);

Given(
    /^the element "([^"]*)?" is( not)? checked$/,
    checkIsChecked
);

Given(
    /^the element "([^"]*)?" has( no)* focus$/,
    checkHasFocus
);

Given(
    /^the element "([^"]*)?" is( not)? enabled$/,
    checkElementEnabled
);

Given(
    /^the cookie "([^"]*)?" value is( not)? "([^"]*)?"$/,
    checkCookieValue
);

Given(
    /^the cookie "([^"]*)?"( not)? exist?$/,
    checkCookieExists
);

Given(
    /^the page title (does not )?contains? "([^"]*)?"$/,
    checkTitleContains
);

Given(
    /^the page url (does not )?contains? "([^"]*)?"$/,
    checkUrlContains
);

Given(
    /^the screenshot of "([^"]*)?" matches the web page?$/, async function (filename) {
        await checkScreenshot.call(this, filename);
    }
);

Given(
    'the {string} page has no accessibility errors',
    checkAccessibility
);