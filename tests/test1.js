'use strict';

module.exports = {
  'Demo Test1': function (browser) {
    var redV = browser.page.test1();

    redV.navigate();
    browser.pause(2000).end();
  }
}
