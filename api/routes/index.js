const express = require("express");
const router = express.Router();
const User = require("../models/users");
const jwt = require("jsonwebtoken");

router.post("/register", (req, res) => {
  console.log("body", req.body);
  User.create(req.body).then((user) => {
    console.log("users", user);
    return res.status(201).send(user);
  });
});
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
          id: user.id,
        };
        const token = generateToken(payload);
        res.status(201).cookie("token", token).send(payload);
      }
    });
  });
});

module.exports = router;
