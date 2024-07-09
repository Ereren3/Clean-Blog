const express = require("express");
const postController = require("../controllers/postController");

const router = express.Router();

router.route("/").post(postController.addPost);
router.route("/:id").get(postController.getPostPage);
router.route("/edit/:id").get(postController.getPostEditPage);
router.route("/edit/:id").put(postController.editPost);
router.route("/edit/:id").delete(postController.deletePost);

module.exports = router;