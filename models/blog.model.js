const mongoose = require('mongoose')

const Blog = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 5,
    },
    content:{
        type: String,
        required: true,
        
    },
    thumbnail:{
        type: String,
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        reference: "user",
        required: true
    },
    likes:{
        type: Number,
        default: 0
    },
    comments:{
        types: [mongoose.Schema.Types.ObjectId],
        reference: "comment",
        default: []
    }
})
module.exports = mongoose.Model("blog", Blog)
