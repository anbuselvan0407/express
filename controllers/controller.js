// import { getAllUsers, getUserById } from '../services/service.js';

// // export const getAllUsersHandler = async (req, res) => {
// //   try {
// //     const users = await getAllUsers();
// //     res.json(users);
// //   } catch (err) {
// //     res.status(500).json({ error: 'Something went wrong' });
// //   }
// // };


// export const getAllUsersHandler = async (req, res) => {
//   try {
//     res.json([{ test: "Hello, this is a test" }]);
//   } catch (err) {
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// };



// export const getUserByIdHandler = async (req, res) => {
//   try {
//     const user = await getUserById(req.params.id);
//     if (!user) return res.status(404).json({ error: 'User not found' });
//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// };



// controllers/controller.js
import { getAllUsers, getUserById, deleteUser, getmarksbyid, getAllStaff } from '../services/service.js';
import { createUser,fetchPaginatedStudents } from '../services/service.js';
import { updateUser,fetchStudentCount } from '../services/service.js';


// export const getAllUsersHandler = async (req, res) => {
//   try {

//     const users = await getAllUsers(req);
//     console.log('Users fetched:', users);
//     return res.json(users);
//   } catch (err) {
//     console.error('Error in getAllUsersHandler:', err);
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// };
export const getAllUsersHandler = async (req, res) => {
  try {
    console.log("req.query.page");
    const limit = parseInt(req.query.limit) || 5;
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * limit;
    const students = await fetchPaginatedStudents(limit, offset);
    const total = await fetchStudentCount();
    
    return res.status(200).json({ data: students, total });
  } catch (err) {
    console.error('Error in getAllUsersHandler:', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};


export const getAllStaffHandler = async (req,res) => {
  try{
    const staff = await getAllStaff(req);
    console.log('staff fetched:',staff);
    return res.json(staff);
  }catch(err){
    console.error('error in getAllStaffHandler:',err);
    res.status(500).json({error:'something went wrong'});
  }
};


export const getUserByIdHandler = async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

  
// export async function getPaginatedStudents(req, res) {
//   try {
//     const limit = parseInt(req.query.limit) || 5;
//     const page = parseInt(req.query.page) || 1;
//     const offset = (page - 1) * limit;

//     const students = await fetchPaginatedStudents(limit, offset);
//     const total = await fetchStudentCount();

//     res.status(200).json({ data: students, total });
//   } catch (error) {
//     console.error('Error fetching paginated students:', error);
//     res.status(500).json({ message: 'Internal Server Error' });"Grade must be valid"
//   }
// }



export const createUserHandler = async (req, res) => {
  try {
    const { name, age, grade } = req.body;
    if (!name || !age || !grade) {
      return res.status(400).json({ error: 'Name, age, and grade are required' });
    }
    const newUser = await createUser(name, age, grade);
    res.status(201).json(newUser);
  } catch (err) {
    console.error('Error in createUserHandler:', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};



export const updateUserHandler = async (req, res) => {
  console.log('srgf')
  try {
    const { name, age, grade } = req.body;
    const { id } = req.params;

    if (!name || !age || !grade) {
      return res.status(400).json({ error: 'Name, age, and grade are required' });
    }

    const updated = await updateUser(id, name, age, grade);

    if (!updated) {
      return res.status(404).json({ error: 'User not found or not updated' });
    }

    res.json({ message: 'User updated successfully' });
  } catch (err) {
    console.error('Error in updateUserHandler:', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};
 


export const deleteUserHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteUser(id);

    if (!deleted) {
      return res.status(404).json({ error: 'User not found or already deleted' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('Error in deleteUserHandler:', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};



export const getmarksbyidHandler = async(req,res)=>{
  try{
    const user = await getmarksbyid(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
} 