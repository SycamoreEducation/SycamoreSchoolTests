var HtmlReporter = require('nightwatch-html-reporter');

module.exports = {
    reporter: new HtmlReporter({
        openBrowser: true,
        reportsDirectory: __dirname + '/reports',
        themeName: 'default',
        reportFilename: 'nightwatch.html',
        uniqueFilename: true
    })
};
