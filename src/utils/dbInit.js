const pool = require('../config/db');
const fs = require('fs');
const path = require('path');

const initializeDb = async () => {
  try {
    // Create fighters table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS fighters (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        wins INTEGER NOT NULL DEFAULT 0,
        losses INTEGER NOT NULL DEFAULT 0,
        kos INTEGER NOT NULL DEFAULT 0,
        submissions INTEGER NOT NULL DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    
    console.log('Database tables created successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
};


if (require.main === module) {
  initializeDb()
    .then(() => {
      console.log('Database initialization complete');
      process.exit(0);
    })
    .catch(err => {
      console.error('Database initialization failed:', err);
      process.exit(1);
    });
}

module.exports = { initializeDb };
