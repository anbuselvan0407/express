export const get_all_users = 'SELECT * FROM students';
export const get_user_by_id = 'SELECT * FROM students WHERE id = ?';
export const create_user = 'INSERT INTO students (name, age, grade) VALUES (?, ?, ?)';
export const update_user = 'UPDATE students SET name = ?, age = ?, grade = ? WHERE id = ?';
export const delete_user = 'DELETE FROM students WHERE id = ?';
export const get_all_staff = 'SELECT * FROM staff';
export const get_paginated_users = 'SELECT * FROM students LIMIT ? OFFSET ?';
export const get_users_count = 'SELECT COUNT(*) AS total FROM students';
