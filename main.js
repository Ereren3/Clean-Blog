const express = require("express");
const mongoose = require("mongoose");
const pageRoute = require("./routes/pageRoutes");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", pageRoute);

app.listen("3000", () => {
  console.log("Server is started!");
});
