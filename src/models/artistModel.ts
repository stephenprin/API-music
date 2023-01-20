import mongoose from "mongoose";

export interface ArtistInterface { 
    name: string;
    imageUrls: string;
    twitter: string;
    instagram: string;
   
}


const artistSchema = new mongoose.Schema<ArtistInterface>({
    name: {
        type: String,
        required: true
        
    },
    imageUrls: {
        type: String,
        required: true
    },
    twitter: {
        type: String,
        required: true
    },
    instagram: {
        type: String,
        required: true
    }
}, {
    timestamps: true
    
})

const Artist = mongoose.model<ArtistInterface>("Artist", artistSchema); 
export default Artist;