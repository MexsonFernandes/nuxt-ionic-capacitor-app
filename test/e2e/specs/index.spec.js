const Page = require('../pageObjects/main.page')

// eslint-disable-next-line no-undef
describe('Example test', () => {
  // eslint-disable-next-line no-undef
  it('should open correct app', () => {
    Page.open()
    // eslint-disable-next-line no-undef
    expect(browser).toHaveTitle('nuxt-capacitor-app')
  })
})
