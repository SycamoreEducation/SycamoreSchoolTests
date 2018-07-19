require('dotenv').load();
var reporter = require('./htmlReporter').reporter;

module.exports = {
    FRAME_PAUSE: process.env.FRAME_PAUSE || 500,

    reporting : {
        reporter: reporter.fn
    }
};