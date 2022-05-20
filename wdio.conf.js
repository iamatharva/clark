exports.config = {
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://staging.clark.de/de/app/contracts?cv=2',
    waitforTimeout: 60000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    before: async function() {
      await browser.deleteAllCookies()
      await browser.execute(() => this.localStorage.clear())
    },
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
