const pool = require('../config/db');

// Get all fighters
const getAllFighters = async () => {
    try {
      const result = await pool.query('SELECT * FROM fighters ORDER BY id');
      return result.rows;
    } catch (error) {
      throw new Error(`Error fetching fighters: ${error.message}`);
    }
};

// Get fighter by ID
const getFighterById = async (id) => {
    try {
      const result = await pool.query('SELECT * FROM fighters WHERE id = $1', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error fetching fighter: ${error.message}`);
    }
};

// Create a new fighter
const createFighter = async (fighter) => {
    try {
      const { name, wins, losses, kos, submissions } = fighter;
      const result = await pool.query(
        'INSERT INTO fighters (name, wins, losses, kos, submissions) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [name, wins, losses, kos, submissions]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error creating fighter: ${error.message}`);
    }
};

// Update a fighter
const updateFighter = async (id, fighter) => {
    try {
      const { name, wins, losses, kos, submissions } = fighter;
      const result = await pool.query(
        'UPDATE fighters SET name = $1, wins = $2, losses = $3, kos = $4, submissions = $5, updated_at = CURRENT_TIMESTAMP WHERE id = $6 RETURNING *',
        [name, wins, losses, kos, submissions, id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error updating fighter: ${error.message}`);
    }
};

// Delete a fighter
const deleteFighter = async (id) => {
    try {
      const result = await pool.query('DELETE FROM fighters WHERE id = $1 RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Error deleting fighter: ${error.message}`);
    }
};

module.exports = {
    getAllFighters,
    getFighterById,
    createFighter,
    updateFighter,
    deleteFighter
};
