import express, { NextFunction, Request, Response } from 'express';
import Artist from '../models/artistModel';


export const artist = async (req: Request, res: Response, next: NextFunction) => { 
    try {
        const {  name, imageUrls, twitter,instagram} = req.body;
        const artist = await Artist.create({
            name, imageUrls, twitter,instagram
        });
        res.status(201).json({
            message: 'Artist created successfully',
            artist
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}

