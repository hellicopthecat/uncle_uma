const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "../front/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../front/build/index.html"));
});

app.listen(7777, () => {
  console.log("HERE localhost:7777 is listening");
});
