const commonSelector = require('../selectors/common')

class CommonPage {
  async cookies(){
    const datePicker = await browser.$(commonSelector.cookies)
    return await datePicker.click()
  }
}

module.exports = new CommonPage()