// // services/user.service.js

// // In a real app, you'd call a database or third-party API here
// import pool from '../config/db.js';

// export const getAllUsers = async () => {
//   const [rows] = await pool.query('SELECT * FROM students');
//   return rows;
// };

// export const getUserById = async (id) => {
//   const [rows] = await pool.query('SELECT * FROM students WHERE id = ?', [id]);
//   return rows[0];
// };

// services/service.js




import pool from '../config/db.js';
import {
  get_all_users,
  get_user_by_id,
  create_user,
  update_user,
  delete_user,
  get_all_staff,
  get_paginated_users,
  get_users_count} from '../query/query.js'

export const getAllUsers = async () => {
  try {
    const [rows] = await pool.query(get_all_users);
    return rows;
  } catch (error) {
    console.error('DB Error - getAllUsers:', error);
    throw new Error('Failed to fetch users from database');
  }
};

export const getAllStaff = async () => {
  try{
    const [rows] = await pool.query(get_all_staff);
    return rows;
  }catch(error){
    console.error('DB Error -  getAllStaff:',error);
    throw new Error('Failed to fetch users from database');
  }
}

export const getUserById = async (id) => {
  try {
    const [rows] = await pool.query(get_user_by_id, [id]);
    return rows[0];
  } catch (error) {
    console.error('DB Error - getUserById:', error);
    throw new Error('Failed to fetch user by ID');
  }
};

export async function fetchPaginatedStudents(limit, offset) {
  const [students] = await pool.query(get_paginated_users, [limit, offset]);
  return students;
};

export async function fetchStudentCount() {
  const [[{ total }]] = await pool.query(get_users_count);
  return total;
};

export const createUser = async (name, age, grade) => {
  try {
    const [result] = await pool.query(create_user, [name, age, grade]);
    console.log("hi");
    return { id: result.insertId, name, age, grade };
  } catch (error) {
    console.error('DB Error - createUser:', error);
    // throw new Error('Failed to create user');
  }
};

export const updateUser = async (id, name, age, grade) => {
  try {
    const [result] = await pool.query(update_user, [name, age, grade, id]);
    return result.affectedRows > 0;
  } catch (error) {
    console.error('DB Error - updateUser:', error);
    throw new Error('Failed to update user');
  }
};

export const deleteUser = async (id) => {
  try {
    const [result] = await pool.query(delete_user, [id]);
    return result.affectedRows > 0;
  } catch (error) {
    console.error('DB Error - deleteUser:', error);
    throw new Error('Failed to delete user');
  }
};




export const getmarksbyid = async (id) => {
  const [result] = await pool.query('SELECT * FROM students INNER JOIN marks on students.id=marks.std_Id WHERE students.id=?',[id]);
  return result[0];
}