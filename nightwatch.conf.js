const SCREENSHOT_PATH = "./screenshots/";
const BINPATH = './bin/';

module.exports = {
  "src_folders": [
    "./tests/"// Where you are storing your Nightwatch e2e tests
  ],
  "output_folder": "./reports", // reports (test outcome) output by nightwatch
  "page_objects_path" : "./pages",
  "selenium": { // downloaded by selenium-download module (see readme)
    "start_process": true, // tells nightwatch to start/stop the selenium process
    "server_path": "./bin/selenium.jar",
    "host": "127.0.0.1",
    "port": 4444, // standard selenium port
    "cli_args": { // chromedriver is downloaded by selenium-download (see readme)
      "webdriver.chrome.driver" : "./bin/chromedriver"
    }
  },
  "test_settings": {
    "default": {
      "screenshots": {
        "enabled": true, // if you want to keep screenshots
        "path": './screenshots' // save screenshots here
      },
      "globals": {
        "waitForConditionTimeout": 5000 // sometimes internet is slow so wait.
      },
      "desiredCapabilities": { // use Chrome as the default browser for tests
        "browserName" : "phantomjs",
        "javascriptEnabled" : true,
        "acceptSslCerts" : true,
        "phantomjs.binary.path" : "./bin/phantomjs",
        "phantomjs.cli.args" : []
      }
    },
    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true // turn off to test progressive enhancement
      }
    }
  }
}

var fs = require('fs'),
    selenium = require('selenium-download');

fs.stat(BINPATH + 'selenium.jar', function (err, stat) { // got it?
  if (err || !stat || stat.size < 1) {
    selenium.ensure(BINPATH, function(error) {
      if (error) throw new Error(error); // no point continuing so exit!
      console.log('✔ Selenium & Chromedriver downloaded to:', BINPATH);
    });
  }
});
