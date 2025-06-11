const express = require("express");
const PDFParser = require("pdf-parse");
const fs = require("fs");

const uploadDirectory = "./uploads";
const multer = require("multer");
const path = require("path");
const mammoth = require("mammoth");
const pdf = require("html-pdf");

const uploadRouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "UploadedFiles/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

uploadRouter.get("/upload", (req, res, next) => {});

module.exports = uploadRouter;
