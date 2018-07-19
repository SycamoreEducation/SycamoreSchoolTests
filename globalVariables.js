require('dotenv').load();

var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
    openBrowser: true,
    reportsDirectory: __dirname + '/reports',
    themeName: 'default-gray',
    hideSuccess: true,
    reportFilename: 'nightwatch.html',
    uniqueFilename: true,
    relativeScreenshots: true
});

module.exports = {
    FRAME_PAUSE: process.env.FRAME_PAUSE || 500,

    reporting : {
        reporter: reporter.fn
    }
};