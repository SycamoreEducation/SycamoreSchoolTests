require('dotenv').load();
var reporter = require('./htmlReporter');

module.exports = {
    FRAME_PAUSE: process.env.FRAME_PAUSE || 500,

    reporting : {
        reporter: reporter.fn
    }
};
