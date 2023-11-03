const router = require("express").Router();
const { User } = require("../../config/db");

//registro de usuario
router.post("/register", (req, res) => {
  User.create(req.body).then((user) => {
    res.status(201).send(user);
    console.log(user, "user");
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
          lastname: user.lastname,
        };
        const token = generateToken(payload);
        res.status(201).cookie("token", token).send(payload);
      }
    });
  });
});

module.exports = router;
