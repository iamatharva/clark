const RecommendationsPage = require('../page/pageAction/Recommendations.page')
const CommonPage = require('../page/pageAction/Common.page')

describe('User on recommendations Page', async() => {
  it('should be able to see the required recommendations', async() => {
    await RecommendationsPage.open()
    await CommonPage.cookies()
    await RecommendationsPage.open()
    await RecommendationsPage.recommendationsTab()
    await RecommendationsPage.fillInNecessaryDetails()
    await RecommendationsPage.fillInRegistrationDetails()

    const title = await RecommendationsPage.recommendationTitle()
    expect(title).toEqual('Dein Bedarf')
  })
})
