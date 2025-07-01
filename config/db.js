// config/db.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "SchoolDB",
  password: "softsuave",
  
});

export default pool;




