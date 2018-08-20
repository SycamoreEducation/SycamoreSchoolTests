require('dotenv').load();

module.exports = {
    FRAME_PAUSE: process.env.FRAME_PAUSE || 500,
    YEAR_START: process.env.YEAR_START,
    YEAR_END: process.env.YEAR_END,
    CURRENT_QUARTER: process.env.CURRENT_QUARTER
};
