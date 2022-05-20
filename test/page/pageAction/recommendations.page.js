const Page = require('./page')
const recommendationsSelector = require('../selectors/recommendations')
const FormSelection = require('../pageAction/formSelection.page')
const RegistrationPage = require('../pageAction/registration.page')

class Recommendations extends Page{
  async open() {
    await super.open()
  }

  async recommendationsTab() {
    const recommendationsTab = await browser.$(recommendationsSelector.requirementsTab)
    await recommendationsTab.click()
  }

  async startNow() {
    const startNow = await browser.$(recommendationsSelector.startNow)
    await startNow.click()
  }

  async fillInNecessaryDetails() {
    await this.startNow()
    await FormSelection.datePicker('26-06-1975')
    await FormSelection.buttonClick('Weiter')
    await FormSelection.radioButtonClick('Männlich')
    await FormSelection.radioButtonClick('In meiner eigenen Wohnung')
    await FormSelection.checkBoxclick('Auto')
    await FormSelection.buttonClick('Weiter')
    await FormSelection.radioButtonClick('Ich bin verheiratet')
    await FormSelection.radioButtonClick('Ja')
    await FormSelection.radioButtonClick('Verbeamtet')
    await FormSelection.inputTextSetValue('QA')
    await FormSelection.buttonClick('Weiter')
    await FormSelection.radioButtonClick('Privat')
    await FormSelection.checkBoxclick('Ich reise sehr viel')
    await FormSelection.buttonClick('Weiter')
    await FormSelection.checkBoxclick('Hund')
    await FormSelection.buttonClick('Weiter')
    await FormSelection.inputTextSetValue('40000')
    await FormSelection.buttonClick('Speichern')
    await RegistrationPage.waitForIntroToDisplayed()
  }

  async fillInRegistrationDetails(){
    await RegistrationPage.fillInEmail()
    await RegistrationPage.fillInPassword()
    await RegistrationPage.invokeSubmit()
    await RegistrationPage.waitForRecommendationsToLoad()
  }



  async recommendationTitle() {
    await browser.waitUntil(async () => {
      const element = await browser.$(recommendationsSelector.title)
      if (await element.isDisplayed() === true) return true 
    })
    const titleElement = await browser.$(recommendationsSelector.title)
    return titleElement.getText()
  }
}

module.exports = new Recommendations()
