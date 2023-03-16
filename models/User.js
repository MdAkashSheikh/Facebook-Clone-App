const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        min: 5
    },
    profilePic: {
        type: String,
        default:"",
    },
    coverPic: {
        type: String,
        default: "",
    },
    followers: {
        type: Array,
        default:[]
    },
    following: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('FbUser', userSchema)