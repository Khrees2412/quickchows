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
    location:{ 
        type:String,
        required: true
    },
    orders: {
        desc:{ 
            type:String,
            required: true
        },
        createdAt: new Date, //Date.now,
        status:  true //gonna create a function to edit this later
    }
})
module.exports = User = mongoose.model("userSchema", userSchema);
/*
name: String,
    phoneNumber: Number,
    location: String,
    foodType: String
    */