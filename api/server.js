const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const db = require("./config/db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.listen(3001, () => {
  console.log("Servidor en puerto 3001");
});
