const express = require("express");
const app = express();
const port = process.env.PORT || 7673;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/postImage", (req, res, next) => {
  res.status(200).send("reaching post route. nothing posted yet.");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
