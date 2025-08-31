// config/db.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: "express-main-sanbu0407-889b.d.aivencloud.com",
  user: "avnadmin",
  database: "defaultdb",
  password: "AVNS_Iqq7d7bw7emX0tgHjLc",
  
});

export default pool;




