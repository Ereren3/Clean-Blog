const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String,
    message: String,
    createDate:{
        type: Date,
        default: Date.now,
    },
    author: String,
})

const Post = mongoose.model("Post",PostSchema);

module.exports = Post;