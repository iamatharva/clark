const registrationSelector = require('../selectors/registration')
var randomstring = require("randomstring");

class Registration {
  async waitForIntroToDisplayed(){
    await browser.waitUntil(async () => {
      const element = await browser.$(registrationSelector.introMessage)
      if (await element.isDisplayed() === true) return true 
    })
  }

  async fillInEmail(){
    const element = await browser.$(registrationSelector.emailInput)
    await element.click()
    const email = randomstring.generate(7)
    await element.addValue(`${email}@clark.com`)
  }

  async fillInPassword(){
    const element = await browser.$(registrationSelector.passowrdInput)
    await element.click()
    await element.addValue('Cl@rk12..')
  }

  async invokeSubmit(){
    const element = await browser.$(registrationSelector.submitButton)
    await element.click()
    await browser.pause(2000)
  }

  async waitForRecommendationsToLoad(){
    await browser.pause(2000)
    const element = await browser.$(registrationSelector.submitButton)
    await element.click()
  }
}

module.exports = new Registration()