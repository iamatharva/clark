const wdio = require ('../../../wdio.conf')

module.exports = class Page {
  async open () {
    await browser.setWindowSize(1440, 900)
    await browser.navigateTo(wdio.config.baseUrl)
  }
}
