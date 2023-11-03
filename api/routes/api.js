const router = require("express").Router();
const apiFilmsRouter = require("./api/films");
const apiUsersRouter = require("./api/users");
const meddileware = require("../controllers/middewares");

router.use("/films", apiFilmsRouter);

router.use("/users", apiUsersRouter);

module.exports = router;
