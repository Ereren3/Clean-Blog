const Post = require("../models/Post");

exports.getIndexPage = async (req, res) => {
  const posts = await Post.find({});

  res.render("index", {
    pageName: "index",
    posts
  });
};

exports.getPostPage = (req, res) => {
  res.render("post", {
    pageName: "post",
  });
};

exports.getAboutPage = (req, res) => {
  res.render("about", {
    pageName: "about",
  });
};

exports.getAddPostPage = (req, res) => {
  res.render("add_post", {
    pageName: "add_post",
  });
};
