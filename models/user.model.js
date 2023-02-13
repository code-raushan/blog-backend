const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        trim: true,
        required: [true, "Name is a required field"]
    },
    email: {
        type: String,
        trim: true,
        required: [true, "Email is a required field"],
        unique: [true, "Email already exists"]
    },
    password: {
        type: String,
        required: [true, "Password is a required field"]
    },
    
})

module.exports = mongoose.Model("user", User)
