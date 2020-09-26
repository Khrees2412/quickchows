const mongoose = require('mongoose');

const Schema =  mongoose.Schema;

const userSchema = new Schema({
    name:{ 
        type:String,
        required: true
    },

    email:{ 
        type:String,
        required: true
    
    },
    password:{
        type:String,
        required:true
    },
    createdAt : Date.now
})
module.exports = User = mongoose.model("user", userSchema);
/*
name: String,
    phoneNumber: Number,
    location: String,
    foodType: String
    */