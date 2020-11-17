class Page {
  open(path = '/') {
    // eslint-disable-next-line no-undef
    browser.url(path)
  }
}

module.exports = new Page()
