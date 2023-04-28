const express = require("express");
const app = express();
const port = 4000;
const { videos } = require("./videos");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/videos", videos);

app.get("/", (req, res) => {
  res.send("Tiktok-clone-API");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
