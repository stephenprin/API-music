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

export const getArtist = async (req: Request, res: Response, next: NextFunction) => { 
    try {
        const artist = await Artist.findOne({ _id: req.params.id });
        if (artist) {
            return res.status(200).json({
                message: 'Artist fetched successfully',
                artist
            });
        } else {
            return res.status(404).json({
                message: 'Artist not found'
            });
        }
    } catch (err) {
        return res.status(400).json({
            message: err
        });
    }

}

export const getAllArtist = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const options = {
            sort: {
                createdAt: 1
            }
        }
        const artist = await Artist.find(options);
        if (artist) { 
            return res.status(200).json({
                message: 'Artist fetched successfully',
                artist
            });
        } else {
            return res.status(404).json({
                message: 'Artist not found'
            });
        }
    } catch (error) {
        res.status(400).json({ 
            message: error
        });
    }
}
 

export const updateArtist = async (req: Request, res: Response, next: NextFunction) => { 
    try {
        
        const result = await Artist.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true },
    
             
            
        );

        if (result) { 
            return res.status(200).json({
                message: 'Artist updated successfully',
                result
            });
        } else {
            return res.status(404).json({
                message: 'Artist not found'
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error
        });
    }
}

export const deleteArtist = async (req: Request, res: Response, next: NextFunction) => { 
    try {
        const result = await Artist.findOneAndDelete({ _id: req.params.id });
        if (result) { 
            return res.status(200).json({
                message: 'Artist deleted successfully',
                result
            });
        } else {
            return res.status(404).json({
                message: 'Artist not found'
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error
        });
    }
}