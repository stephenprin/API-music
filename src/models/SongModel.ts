import mongoose from "mongoose";

export interface SongInterface { 
    name: string;
    imageUrls: string;
    songUrl: string;
    artist: string;
    language: string;
    album: string;
    genre: string;
   
}


const songSchema = new mongoose.Schema<SongInterface>({
    name: {
        type: String,
        required: true
        
    },
    imageUrls: {
        type: String,
        required: true
    },
    
    songUrl: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    album: {
        type: String,
    },
    genre: {
        type: String,
        required: true
    }
   
}, {
    timestamps: true
    
})

const Song = mongoose.model<SongInterface>("Song", songSchema); 
export default Song;