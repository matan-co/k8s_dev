const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(new Date());
  res.send("Hello World!7");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
