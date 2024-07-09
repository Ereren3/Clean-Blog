const Post = require("../models/Post");

exports.getIndexPage = async (req, res) => {

  const page = req.query.page || 1;
  const postPerPage = 4;
  let i = 1;

  const totalPhoto = await Post.find({}).countDocuments();

  const posts =  await Post.find({})
  .sort({createDate: 1})
  .skip((page-1)*postPerPage)
  .limit(postPerPage)

  res.render("index", {
    pageName: "index",
    current: page,
    pageCount: Math.ceil(totalPhoto/postPerPage),
    posts,
    i
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
  res.render("addPost", {
    pageName: "addPost",
  });
};
