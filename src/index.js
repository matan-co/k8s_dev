const express = require("express");
const app = express();
const port = process.env.NODE_PORT || 3000;

app.get("/", (req, res) => {
  res.send("SECRET : " + process.env.SECRET_USERNAME);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
