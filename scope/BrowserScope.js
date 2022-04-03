const puppeteer = require('puppeteer');

/**
 * Manage the Puppeteer browser and page objects.
 */
class BrowserScope {
    constructor(args) {
        this.browser = null;
        this.config = null;
        this.page = null;
        this.worldParameters = args && args.parameters ? args.parameters : {};
        this.attach = args && args.attach ? args.attach : null;
    }

    async init() {
        const height = 1080, width = 1920, offset = 100;

        // Include scenario names in the array so that i runs  heedfully on browser
        const heedfulScenarioNames = []

        // change runHeadFull variable to true if you want to always run test heedfully on browser
        const runHeadFull= false;
        const shouldShowInHeadFull = heedfulScenarioNames.includes(this.worldParameters.scenarioName);
        const worldParameterHeadless = this.worldParameters.headless

        const headless =  worldParameterHeadless && !shouldShowInHeadFull &&!runHeadFull
        const size={width: width - 2 * offset, height: height - 3 * offset}
        const defaultOptions = {
            args: ['--no-sandbox', '--disable-dev-shm-usage', `--window-size=${width},${height}`, '--start-maximized'],
            ignoreHTTPSErrors: true,
            defaultViewport: size
        }
        await this.close();

        this.config = {
            ...defaultOptions,
            ...this.worldParameters,
            headless
        };
        if ('browserWSEndpoint' in this.config) {
            this.browser = await puppeteer.connect(this.config);
        } else {
            this.browser = await puppeteer.launch(this.config);
        }
        this.page = await this.browser.newPage();
        this.page.setDefaultNavigationTimeout(40000);
        await this.page.setViewport(size);
    }

    async close() {
        if (this.browser) {
            if ('browserWSEndpoint' in this.config) {
                await this.browser.disconnect();
            } else {
                await this.browser.close();
            }
        }

        this.browser = null;
        this.config = null;
        this.page = null;
    }
}

module.exports = BrowserScope;
