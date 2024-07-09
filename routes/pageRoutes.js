const express = require("express");
const pageController = require("../controllers/pageControllers");

const router = express.Router();

router.route("/").get(pageController.getIndexPage);
router.route("/index").get(pageController.getIndexPage);
router.route("/about").get(pageController.getAboutPage);
router.route("/addPost").get(pageController.getAddPostPage);
router.route("/post").get(pageController.getPostPage);

module.exports = router;