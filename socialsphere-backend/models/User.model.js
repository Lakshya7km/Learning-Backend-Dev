const mongoose = require('mongoose')

//create schema and model it
const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,//you must type this
        trim: true,//'  lakshya ' -> 'lakshya' clean the space
    },

    username: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
    },
    avatar: {
        type: String,
    },
    role: {
        type: String,
        default: "user",
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId, //Array of ObjectIds pointing to the users this person follows
        ref: 'User'// Links back to this same User model

    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId, //Array of ObjectIds pointing to the users this person follows
        ref: 'User'
    }]

},{
    timestamps:true
})



const User = mongoose.model('User',userSchema)
module.exports = User;





//unique id of the person stored in the follwing/follower array of obejct instead of there whole data
//that id is objectId

// type: mongoose.Schema.Types.ObjectId-> special mongodb object Id
//ref:"User" -> id isi User Model ke dusare bande ki hai 

//to extract the all fileds of schema with the help of ObjectId is called .populate()