import express from 'express';
import { signupHandler, loginHandler, meHandler } from '../controllers/auth.controller.js';
import { Jwtdecode } from '../middlewares/Jwtdecode.js';

const router = express.Router();

router.post('/signup',signupHandler);
router.post('/login', loginHandler);
router.get('/me', Jwtdecode, meHandler);//new

export default router;
