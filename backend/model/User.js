import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    firstName:{
        type:String,
        required:true,
        trim:true
    },

    lastName:{
        type:String,
        required:true,
        trim:true
    },

    email:{
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
    }, 

    password:{
        type:String,
        required:true
    },

    role:{
        type:String,
        enum:['user' ,'admin'],
        default:'user'
    }
  
})

export default mongoose.model('User', userSchema)