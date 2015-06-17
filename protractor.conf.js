// An example configuration file.
// https://raw.githubusercontent.com/angular/protractor/master/docs/referenceConf.js

exports.config = {
    directConnect: true,
    allScriptsTimeout: 11000,
    capabilities: {
        browserName: 'chrome'
    },
    /*    baseUrl: 'http://localhost:8080/',*/
    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        includeStackTrace: false,
        isVerbose: false
    }
};
