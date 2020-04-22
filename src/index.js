const express = require("express");
const app = express();
const port = process.env.NODE_PORT || 3000;

app.get("/", (req, res) => {
  res.send(`${process.env.USERNAME} \n
            ${process.env.PASSWORD}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
