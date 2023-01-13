import express, { NextFunction, Request, Response } from 'express';
//import { Login } from '../controller/userController';

import { googleAuth } from '../middleware/googleAuth';
const router = express.Router();



router.get('/login', googleAuth);




export default router;
