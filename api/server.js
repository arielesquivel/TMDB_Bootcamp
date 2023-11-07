const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes/api");
const db = require("./config/db");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use("/users", apiRoutes);

db.sync({ force: false })
  .then(() => {
    console.log("sincronizada  bases");
  })
  .then(() => {
    app.listen(3002, () => {
      console.log("Servidorr en puerto 3002");
    });
  });
