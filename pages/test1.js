'use strict';

var commands = {
  rvTest: function () {
    return this
      .waitForElementVisible('@landingVideo')
      .verify.containsText('@mainHeader', 'We are Red Ventures.')
  }
}

module.exports = {

  url: 'https://www.redventures.com/',
  elements: {
    landingVideo: 'div.cover_all',
    mainHeader: 'h1.hero_heading'
  },
  commands: [commands]
}
