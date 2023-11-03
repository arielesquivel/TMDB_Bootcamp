const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const db = require("./config/db");
const apiRoutes = require("./routes/api");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);
/*app.get("/", (req, res) => {
  res.send("Hola mundo ");
});
*/
app.listen(3002, () => {
  console.log("Servidorr en puerto 3002");
});
