import pool from '../config/db.js';

export const getUserByEmail = async (email) => {
  try{
  const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
  }catch(err){
    return err
  }
};

export const createUser = async (name, email, password) => {
  const [result] = await pool.query(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password]
  );
  return { id: result.insertId, name, email };
};
