const { Pool } = require('pg');
const config = require('./config');

// Debug what's being loaded (optional)
console.log('DB Configuration:');
console.log('- Environment:', config.nodeEnv);
console.log('- Host:', config.db.host);
console.log('- User:', config.db.user); 

const pool = new Pool({
  host: config.db.host,
  port: config.db.port,
  database: config.db.database,
  user: config.db.user,
  password: config.db.password,
  ssl: config.db.ssl
});

module.exports = pool;