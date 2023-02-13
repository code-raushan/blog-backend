const mongoose = require('mongoose')

const Comment = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        reference: "user",
        required: true
    }
})

module.exports = mongoose.Model("comment", Comment)