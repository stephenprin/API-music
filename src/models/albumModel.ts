import mongoose from "mongoose";

export interface AlbumInterface { 
    name: string;
    imageUrls: string;


}


const albumSchema = new mongoose.Schema<AlbumInterface>({
    name: {
        type: String,
        required: true
    },
    imageUrls: {
        type: String,
        required: true
    }
})

const Album = mongoose.model<AlbumInterface>("Album", albumSchema);
export default Album;