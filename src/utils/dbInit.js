const pool = require('../config/db');
const logger = require('./logger');

//  database connection check
const checkDbConnection = async () => {
  try {
    // run a  query to verify connection
    await pool.query('SELECT 1');
    logger.info('Database connection verified');
    return true;
  } catch (error) {
    logger.error(`Database connection failed: ${error.message}`);
    throw error;
  }
};

module.exports = { checkDbConnection };
