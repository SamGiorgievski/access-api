const { Pool } = require('pg');

// Create a PostgreSQL connection pool
const pool = new Pool({
  host: '127.0.0.1',
  user: 'demo',
  password: 'demo',
  database: 'basicapi_users',
  port: 5432,
});

(async () => {
  // Connect to the PostgreSQL database
  const client = await pool.connect();

  try {
    // Execute your SQL query here
    const result = await client.query('SELECT * FROM users');
    console.log(result.rows);
  } catch (error) {
    console.error('Error executing SQL query:', error);
  } finally {
    client.release();
  }
})();
