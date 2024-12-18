const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/mypage", (req, res) => {
  res.send("mypage");
});
app.listen(process.env.PORT, () => {
  console.log("server start");
});
