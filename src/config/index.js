require('dotenv').config();

module.exports = {
    port: process.env.PORT || 5000,
    environment: process.env.NODE_ENV || 'development',
    // Other configuration settings
};
