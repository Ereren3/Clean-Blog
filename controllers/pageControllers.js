const express = require("express");

exports.getIndexPage = (req, res) => {
  res.render("index", {
    pageName: "index",
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
