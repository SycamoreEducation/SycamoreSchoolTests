require('dotenv').load();
//Nightwatch HTML Reporter [https://www.npmjs.com/package/nightwatch-html-reporter]
var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
    openBrowser: false,
    reportsDirectory: __dirname + '/reports',
    themeName: 'cover'
});

module.exports = {
    reporter: reporter.fn,
    FRAME_PAUSE: process.env.FRAME_PAUSE || 500
};