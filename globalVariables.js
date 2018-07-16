require('dotenv').load();

module.exports = {
    pauseTime: process.env.FRAME_PAUSE || 500
};