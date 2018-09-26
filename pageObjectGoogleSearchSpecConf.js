var HtmlReporter = require('protractor-beautiful-reporter');
var utils = require("./utils.js");

var reportsBaseDirectory = './results';

// An example configuration file.
exports.config = { //Ref: https://github.com/angular/protractor/blob/master/lib/config.ts
  directConnect: true

  //Max number of Capabilities to be executed in parallel :: > 1
  , maxSessions: 2

  // Capabilities to be passed to the webdriver instance.
  /*capabilities: {
    'browserName': 'chrome'
  },*/

  //For multiple browsers
  , multiCapabilities: [
    { browserName: 'chrome' }
    , { browserName: 'firefox' }
    //, { browserName: 'internet explorer' }
  ]

  // Framework to use. Jasmine is recommended.
  , framework: 'jasmine'

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  , specs: ['pageObjectGoogleSearchSpec.js']

  // Options to be passed to Jasmine.
  , jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }

  //Delete the reportsBaseDirectory
  , beforeLaunch: () => {
    utils.rmdir(reportsBaseDirectory);
  }

  , onPrepare: () => {
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
    baseDirectory: reportsBaseDirectory
    , takeScreenShotsOnlyForFailedSpecs: false
    , docTitle: 'Google Search Automation by Shalvin Abraham'
    , docName: 'index.html'
    //, preserveDirectory: false //Clear results on each capability if false
    , gatherBrowserLogs: false
    }).getJasmine2Reporter());
  }
};
