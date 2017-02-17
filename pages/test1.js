'use strict';

var commands = {
  rvTest: function () {
    return this
      .waitForElementVisible('@landingVideo')
      .verify.containsText('@mainHeader', 'We are Red Ventures.')
      .getText('@content2', function (res) {
        console.log(res.value);
      })
  }
}

module.exports = {

  url: 'https://www.redventures.com/',
  elements: {
    landingVideo: 'div.cover_all',
    mainHeader: 'h1.hero_heading',
    content2: 'h2.content-block__heading'
  },
  commands: [commands]
}
