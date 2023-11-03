const express = require("express");
const cors = require("cors");
const app = express();
const apiRoutes = require("./routes/api");
const db = require("./config/db");
app.use("/api", apiRoutes);

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
db.sync({ force: false })
  .then(() => {
    console.log("sincronizada  bases");
  })
  .then(() => {
    app.listen(3002, () => {
      console.log("Servidorr en puerto 3002");
    });
  });
