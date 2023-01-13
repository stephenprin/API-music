import express, { NextFunction, Request, Response } from 'express';
import User from '../models/userModel';


// export const Login = (req:Request, res:Response) => { 
//     return res.status(200).json({
//         message: 'Login successful',
        
//     })
// }

// export const getALlUsers = async(req: Request, res: Response) => { 
//     const users = await User.find();
    
//     res.status(200).json({
//         message: 'All users',
//         data: users
//     });
// }