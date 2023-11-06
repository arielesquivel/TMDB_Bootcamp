const router = require("express").Router();
const User = require("../../models/users");

//registro de usuario
router.post("/login/register", (req, res) => {
  User.create(req.body).then((user) => {
    res.status(201).send(user);
  });
});
//login del usuario

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({
    where: { email },
  }).then((user) => {
    if (!user) return res.send(401);
    user.validatePassword(password).then((isValidate) => {
      if (!isValidate) return res.send(401);
      else {
        const payload = {
          email: user.email,
          name: user.name,
        };
        const token = generateToken(payload);
        res.status(201).cookie("token", token).send(payload);
      }
    });
  });
});

module.exports = router;
