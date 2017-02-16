'use strict';

var commands = {
  rvTest: function () {
    return this
      .waitForElementVisible('@landingVideo');
  }
}

module.exports = {

  url: "https://www.redventures.com/",
  elements: {
    landingVideo: "div.cover_all"
  },
  commands:
}
