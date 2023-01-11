import express, { NextFunction, Request, Response } from 'express';
import { Login } from '../controller/userController';

import { googleAuth } from '../middleware/googleAuth';
const router = express.Router();



router.post('/login',googleAuth, Login);

export default router;
