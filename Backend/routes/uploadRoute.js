const express = require("express");
const uploadRouter = express.Router();

uploadRouter.get("/upload", (req, res, next) => {
  res.send("upload route working");
});


module.exports = uploadRouter;