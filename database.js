import dotenv from 'dotenv';
import pg from "pg";
const { Pool } = pg;

dotenv.config();

// Create a PostgreSQL connection pool
const pool = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: 5432,
});

// immediately invoked function expression (IIFE) 
(async () => {
  const client = await pool.connect();

  try {
    const result = await client.query('SELECT * FROM users');

    console.log(result.rows);

  } catch (error) {
    console.error('Error executing SQL query:', error);
  } finally {
    client.release();
  }
})();


// Get all users
export async function getUsers() {

  try {
    const result = await pool.query(`
    SELECT * 
    FROM users`);
    return result.rows;
  } catch (error) {
    console.error('Error executing SQL query:', error);
    throw error; 
  }
}

// QUERIES
// Get user by id
export async function getUser(id) {

  try {
    const result = await pool.query(`
    SELECT * 
    FROM users 
    WHERE id=${id}`);
    return result.rows;
  } catch (error) {
    console.error('Error executing SQL query:', error);
    throw error; 
  }
}

// Create user
export async function createUser(values) {

  const { first_name, last_name, email, is_verified, image_url, description } = values;

  try {
    const result = await pool.query(
      `INSERT INTO users (first_name, last_name, email, is_verified, image_url, description)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *;`,
      [first_name, last_name, email, is_verified, image_url, description]
    );

    // Return the created user
    return result.rows[0];
  } catch (error) {
    console.error('Error executing SQL query:', error);
    throw error;
  }

}

// Update user
export async function updateUser(userId, updatedUserData) {
  const { first_name, last_name, email, is_verified, image_url, description } = updatedUserData;

  try {
    const result = await pool.query(
      `UPDATE users 
       SET first_name = $1, last_name = $2, email = $3, is_verified = $4, image_url = $5, description = $6
       WHERE id = $7
       RETURNING *;`,
      [first_name, last_name, email, is_verified, image_url, description, userId]
    );

    return result.rows[0];
  } catch (error) {
    console.error('Error executing SQL query:', error);
    throw error;
  }
}


// Delete user
export async function deleteUser(userId) {
  try {
    const result = await pool.query(
      `DELETE FROM users 
       WHERE id = $1
       RETURNING *;`,
      [userId]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error executing SQL query:', error);
    throw error;
  }
}