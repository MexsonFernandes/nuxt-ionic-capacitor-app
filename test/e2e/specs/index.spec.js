const Page = require('../pageObjects/main.page')

describe('Example test', () => {
  it('should open correct app', () => {
    Page.open()
    // eslint-disable-next-line no-undef
    expect(browser).toHaveTitle('nuxt-capacitor-app')
  })
})
