const { Sequelize, Model, DataTypes } = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class User extends Model {
  Hash = function (password, salt) {
    return bcrypt.hash(password, salt);
  };

  validatePassword(password) {
    return bcrypt.hash(password, salt).then((hash) => hash === this.password);
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

User.beforeCreate((user) => {
  const salt = bcrypt.genSaltSync(8);
  user.salt = salt;

  return user.Hash(user.password, salt).then((hash) => {
    user.password = hash;
  });
});

module.exports = User;
