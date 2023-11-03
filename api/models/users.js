const Sequelize = require("sequelize");
const db = require("../config/db");
const { Model, DataTypes } = Sequelize;
const bcrypt = require("bcrypt");

class User extends Model {
  generateHash = function (password, salt) {
    return bcrypt.hash(password, salt);
  };

  validatePassword(password) {
    return bcrypt
      .hash(password, this.salt)
      .then((hash) => hash === this.password);
  }
}
User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "user",
  }
);

User.beforeCreate((usuario, options) => {
  const salt = bcrypt.genSaltSync(8);
  usuario.salt = salt;

  return usuario
    .generateHash(usuario.password, usuario.salt)
    .then((hash) => (usuario.password = hash));
});

module.exports = User;
