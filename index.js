const express = require("express");
const app = express();
const port = 4000;
const { videos } = require("./videos");

app.use((req, res, next) => {
  const allowedOrigins = ['https://tiktok-clone-ca5ae.web.app', 'https://tiktok-clone-ca5ae.firebaseapp.com'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  next();
});

app.get("/videos", videos);

app.get("/", (req, res) => {
  res.send("Tiktok-clone-API");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
