//hola
const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("hola mundo");
});
app.listen(3001, () => {
  console.log("servidor en puerto 3001");
});
