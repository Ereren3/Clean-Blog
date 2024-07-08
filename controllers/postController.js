const { redirect } = require("express/lib/response");
const Post = require("../models/Post");

exports.addPost = async (req, res) => {
  await Post.create(req.body);

  res.redirect("/index");
};

exports.getPhotoPage = async (req,res) => {
  const post = await Post.findById(req.params.id);

  res.render("post",{
    pageName: "post",
    post
  })
}
