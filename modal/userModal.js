import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
      
    },
   phone:{
        type:Number,
        required:true
    },
    profession:{
        type:String,
        required:true
    }
},{timestamps:true})

const Users = mongoose.model("Users",userSchema)
export default Users