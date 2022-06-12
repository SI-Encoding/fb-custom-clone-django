
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
    {
        message: { type: String },
        profilePic: { type: String, required: true },
        username: { type: String, required: true },
        favourite: { type: Boolean},
        gif: { type: Boolean},
        userId: {type: String, required: true},
        image: { type: String}
    },
    { timestamps: true },
)

module.exports = mongoose.model('posts', Post)