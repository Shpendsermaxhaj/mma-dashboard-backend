const { Pool } = require('pg');
const dotenv = require('dotenv');
const path = require('path');

const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';
dotenv.config({ path: path.resolve(__dirname, '../../', envFile) });

// Debug what's being loaded
console.log('DB Configuration:');
console.log('- Environment:', process.env.NODE_ENV);
console.log('- Host:', process.env.DB_HOST);
console.log('- User:', process.env.DB_USER); 

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});




module.exports = pool;