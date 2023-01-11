import express, { NextFunction, Request, Response } from 'express';


export const Login = (req:Request, res:Response) => { 
    res.status(200).json({
        status: 'success',
    })
}