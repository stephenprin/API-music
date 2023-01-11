import mongoose from "mongoose";

export interface UserInterface{
    name: string;
    email: string;
    imageUrl: string;
    user_id: string;
    email_verified: boolean;
    role: string;
    auth_time: string;

}

const userSchema = new mongoose.Schema<UserInterface>({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        trim: true,
    
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
    },
    imageUrl: {
        type: String,
        required: [true, "Please enter your image url"],
    },
    user_id: {
        type: String,
        required: true
    },
    email_verified: {
        type: Boolean,
        required:true
    },
    role: {
        type: String,
       
    },
    auth_time: {
        type: String,
        required: true
    }
    
}, {
    timestamps: true
});
const User = mongoose.model<UserInterface>("User", userSchema);
export default User;