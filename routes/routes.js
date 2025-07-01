// import express from 'express';

// import { getAllUsersHandler, getUserByIdHandler } from '../controllers/controller.js';


// const router = express.Router();

// router.get('/', getAllUsersHandler);
// router.get('/:id', getUserByIdHandler);

// export default router;

// routes/routes.js
import express from 'express';
import {
  getAllUsersHandler,
  getUserByIdHandler,
  createUserHandler,
  updateUserHandler,
  getmarksbyidHandler,
  deleteUserHandler,
  getAllStaffHandler
} from '../controllers/controller.js';


import { Jwtdecode } from '../middlewares/Jwtdecode.js';   //new


import { userValidationRules } from '../validators/userValidator.js';
import { validate } from '../middlewares/validate.js';


const router = express.Router();

// ✅ Protect all student routes
router.use(Jwtdecode);

// All routes related to "/"
router.route('/')
  .get(getAllUsersHandler)
  .post(userValidationRules, validate, createUserHandler);

router.route('/staff')
  .get(getAllStaffHandler);

// Routes for "/:id"
router.route('/:id')
  .get(getUserByIdHandler)
  .put(userValidationRules, validate, updateUserHandler)
  .delete(deleteUserHandler);

// router.route('/students')
//   .get(getPaginatedStudents);

// router.get('/profile', Jwtdecode, (req, res) => {
//   try{
//   res.json({ message: `Welcome, ${req.user.email}!`, userId: req.user.id });
//   }catch(err){
//     console.log(err)
//   }
// });

//




router.get('/getmark/:id',getmarksbyidHandler);


export default router;

// (req, res, next) => {
  // if (req.url !== '/') {
    // console.log(`Blocked malformed URL: ${req.url}`);
    // return res.status(400).json({ error: 'Bad Request' });
  // }
  // next();
  // }