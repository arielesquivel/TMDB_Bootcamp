const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { User } = require("../../config/db");
const { check, validationResult } = require("express-validator");

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

router.post("/login", async (req, res) => {
  const user = await User.findOne({
    where: { email: req.body.email },
  });
  if (user) {
    const iguales = bcrypt.compareSync(req.body.password, user.password);
    if (iguales) {
      res.json({ success: "TOKEN" });
    } else {
      res.json({ error: "Error en el usuario" });
    }
  } else {
    res.json({ error: "Error en el usuario" });
  }
});
const createToken = (User) => {
  const payload = {};
};
module.exports = router;
