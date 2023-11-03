const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { User } = require("../../config/db");
const { check, validationResult } = require("express-validator");
const moment = require("moment");
const jwt = require("jwt-simple");

//registro de usuario
router.post(
  "/register",
  [
    check("username", "Username es requerido").not().isEmpty(),
    check("password", "Password es requerido").not().isEmpty(),
    check("email", "El email debe ser correcto").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json(user);
  }
);
//inicio de sesion
router.post("/login", async (req, res) => {
  const user = await User.findOne({
    where: { email: req.body.email },
  });
  if (user) {
    const iguales = bcrypt.compareSync(req.body.password, user.password);
    if (iguales) {
      res.json({ success: createToken(user) });
    } else {
      res.json({ error: "Error en el usuario" });
    }
  } else {
    res.json({ error: "Error en el usuario" });
  }
});
const createToken = (User) => {
  const payload = {
    id: User.id,
    username: User.username,
    createAt: moment().unix(),
    expiredAt: moment().add(5, "minutes").unix(),
  };
  return jwt.encode(payload, "loging");
};
module.exports = router;
