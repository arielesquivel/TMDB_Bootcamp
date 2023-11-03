const jwt = require("jwt-simple");
const moment = require("moment");
const checkToken = (req, res, next) => {
  if (!req.headers["user-token"]) {
    return res.json({ error: "necesita contraseña" });
  }
  const userToken = req.headers["user-token"];
  let payload = {};
  try {
    payload = jwt.decode(userToken, "loging");
  } catch (err) {
    return res.json({ error: "el token expiro" });
  }
  if (payload.expiredAt < moment().unix()) {
    return res.json({ error: "el token ah expirado" });
  }

  req.usuarioId = payload.usuarioId;

  next();
};
module.exports = {
  checkToken: checkToken,
};
