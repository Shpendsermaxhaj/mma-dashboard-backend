const { Pool } = require('pg');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// Check if variables are loaded
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_HOST:', process.env.DB_HOST);

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'ufc_dashboard',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '',
  ssl: {
    rejectUnauthorized: false
  }
});

// Verify connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection error', err);
  } else {
    console.log('Database connected at', res.rows[0].now);
  }
});

module.exports = pool;