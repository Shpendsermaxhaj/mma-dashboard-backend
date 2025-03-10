const dotenv = require('dotenv');
const path = require('path');

// Load environment variables just once
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';
dotenv.config({ path: path.resolve(__dirname, '../../', envFile) });

// Log environment for debugging
console.log(`Environment initialized: ${process.env.NODE_ENV || 'development'}`);

// Export all config values centrally
module.exports = {
  // Server config
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // Database config
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
  },
  
};
