const pool = require('../config/db');

const fighters = [
  { name: 'Jon Jones', wins: 27, losses: 1, kos: 10, submissions: 7 },
  { name: 'Israel Adesanya', wins: 24, losses: 3, kos: 16, submissions: 0 },
  { name: 'Kamaru Usman', wins: 20, losses: 2, kos: 9, submissions: 1 },
  { name: 'Conor McGregor', wins: 22, losses: 6, kos: 19, submissions: 0 },
  { name: 'Stipe Miocic', wins: 20, losses: 4, kos: 15, submissions: 0 },
  { name: 'Nate Diaz', wins: 20, losses: 13, kos: 5, submissions: 13 },
  { name: 'Francis Ngannou', wins: 16, losses: 3, kos: 12, submissions: 0 },
  { name: 'Daniel Cormier', wins: 22, losses: 3, kos: 10, submissions: 5 },
  { name: 'Amanda Nunes', wins: 21, losses: 4, kos: 13, submissions: 3 },
  { name: 'Max Holloway', wins: 23, losses: 7, kos: 10, submissions: 3 },
  { name: 'Tony Ferguson', wins: 25, losses: 7, kos: 12, submissions: 9 },
  { name: 'Charles Oliveira', wins: 31, losses: 8, kos: 9, submissions: 20 }
];

const insertData = async () => {
  try {
    // Check if data already exists
    const result = await pool.query('SELECT COUNT(*) FROM fighters');
    if (parseInt(result.rows[0].count) > 0) {
      console.log('Data already exists in fighters table. Skipping insertion.');
      return;
    }

    // Insert fighters data
    for (const fighter of fighters) {
      await pool.query(
        'INSERT INTO fighters (name, wins, losses, kos, submissions) VALUES ($1, $2, $3, $4, $5)',
        [fighter.name, fighter.wins, fighter.losses, fighter.kos, fighter.submissions]
      );
    }
    
    console.log('Demo data inserted successfully!');
  } catch (error) {
    console.error('Error inserting demo data:', error);
  } finally {
    // End the pool
    pool.end();
  }
};

// Run if called directly
if (require.main === module) {
  insertData()
    .then(() => console.log('Finished data insertion process'))
    .catch(err => console.error('Data insertion failed:', err));
}

module.exports = { insertData };
