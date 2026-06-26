import mongoose from 'mongoose';
//import { Schema, Document } from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    email:{
        type: String,
        required: true 
    },
    date: {
        type: Date,
        required: false,
        default: Date.now
    } 
});
// Export the model using export default
export default mongoose.model("User",userSchema);
