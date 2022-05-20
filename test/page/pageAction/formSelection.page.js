const formSelectionSelector = require('../selectors/formSelectionSelector')
const ElementService = require('../../services/selectorService')

class FormSelection {
  async datePicker(date){
    const datePicker = await browser.$(formSelectionSelector.datePicker)
    await browser.pause(1000)
    await datePicker.click()
    return await datePicker.addValue(date)
  }

  async buttonClick(text){
    const selector = formSelectionSelector.buttonClick
    await browser.waitUntil(async () => {
      const element = await browser.$(selector)
      if (await element.isDisplayed() === true) return true 
    })
    const index = await ElementService.multipleElementSearchByIncludeText(selector, text)
    const element = await browser.$$(selector)
    await element[index].click()
    await browser.pause(1000)
  }

  async radioButtonClick(text){
    const selector = formSelectionSelector.radioButton
    await browser.waitUntil(async () => {
      const element = await browser.$(selector)
      if (await element.isDisplayed() === true) return true 
    })
    const index = await ElementService.multipleElementSearchByIncludeText(selector, text)
    const element = await browser.$$(selector)
    await element[index].click()
    await browser.pause(1000)
  }

  async checkBoxclick(text){
    const selector = formSelectionSelector.checkBoxClick
    await browser.waitUntil(async () => {
      const element = await browser.$(selector)
      if (await element.isDisplayed() === true) return true 
    })
    const index = await ElementService.multipleElementSearchByIncludeText(selector, text)
    const element = await browser.$$(selector)
    await element[index].click()
    await browser.pause(1000)
  }

  async inputTextSetValue(text){
    const selector = formSelectionSelector.inputText
    const element = await browser.$(selector)
    await browser.waitUntil(async () => {
      const element = await browser.$(selector)
      if (await element.isDisplayed() === true) return true 
    })
    await element.click()
    await element.setValue(text)
    await browser.pause(1000)
  }
}

module.exports = new FormSelection()