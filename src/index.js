const express = require("express");
const uuid = require("uuid");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!3" + uuid.v1());
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
