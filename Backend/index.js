const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uploadRouter = require("./routes/uploadRoute");

app.use("/", uploadRouter);

app.listen(port, () => {
  console.log(`serve active on port ${port}`);
});
