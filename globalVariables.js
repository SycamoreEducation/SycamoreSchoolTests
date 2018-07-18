require('dotenv').load();

module.exports = {
    USERNAME: process.env.USERNAME || 'superuser',
    PASSWORD: process.env.PASSWORD || 'guest',
    SCHOOL_ID: process.env.SCHOOL_ID || '1',
    FRAME_PAUSE: process.env.FRAME_PAUSE || 500,
};