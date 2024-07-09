const Post = require("../models/Post");

exports.addPost = async (req, res) => {
  await Post.create(req.body);

  res.redirect("/index");
};

exports.getPostPage = async (req, res) => {
  const post = await Post.findById(req.params.id);

  res.render("post", {
    pageName: "post",
    post,
  });
};

exports.getPostEditPage = async (req, res) => {
  const post = await Post.findById(req.params.id);

  res.render("postEdit", {
    pageName: "postEdit",
    post,
  });
};

exports.editPost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  post.title = req.body.title;
  post.message = req.body.message;
  post.author = req.body.author;

  post.save();

  res.redirect("/index");
};

exports.deletePost = async (req,res) => {
  await Post.findByIdAndDelete(req.params.id); 

  res.redirect("/index");
}