const express = require("express");
const mongoose = require("mongoose");
const pageRoutes = require("./routes/pageRoutes");
const postRoutes = require("./routes/postRoutes");
const methodOverride = require("method-override");


const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/CleanBlog")

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

app.use("/", pageRoutes);
app.use("/posts", postRoutes);

app.listen(3000, () => {
  console.log("Server is started!");
});
