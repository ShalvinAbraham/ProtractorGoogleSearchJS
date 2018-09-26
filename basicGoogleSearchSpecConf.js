// An example configuration file.
exports.config = { //Ref: https://github.com/angular/protractor/blob/master/lib/config.ts
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['basicGoogleSearchSpec.js']
};
