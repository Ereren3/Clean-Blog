const express = require("express");
const postController = require("../controllers/postController");

const router = express.Router();

router.route("/").post(postController.addPost);
router.route("/:id").get(postController.getPhotoPage);

module.exports = router;