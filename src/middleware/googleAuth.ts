import { Request, Response, NextFunction } from 'express';
import admin from '../config/firebase.config';
import User  from '../models/userModel';
export const googleAuth = async (req: Request, res: Response, next: NextFunction) => { 
    try {
        if(!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) { 
            return res.status(403).json({
                status: 'fail',
                message: 'Invalid token'
            })
        }
        const token = req.headers.authorization.split('Bearer ')[1];
        const decodedToken = await admin.auth().verifyIdToken(token);
        if(!decodedToken) { 
            return res.status(403).json({
                status: 'fail',
                message: 'Unauthorized'
            })
        } else {
            //checking if user exit
            const userExit = await User.findOne({ "user_id": decodedToken.user_id });
            if (!userExit) { 
                const newUser = new User({
                    name: decodedToken.name,
                    email: decodedToken.email,
                    imageUrl: decodedToken.picture,
                    user_id: decodedToken.user_id,
                    email_verified: decodedToken.email_verified,
                    role: "user",
                    auth_time: decodedToken.auth_time
                });
                const savedUser = await newUser.save();
                res.status(201).json({
                    message: 'User created successfully',
                    data: savedUser
                });
            } else {
                res.status(400).json({
                    messsage: 'User already exist',
                    

                });
            }
        }
       next();
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error
        })
    }
}