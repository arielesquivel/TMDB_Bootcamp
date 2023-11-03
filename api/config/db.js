const Sequelize = require("sequelize");
const FilmModel = require("../models/films");
const UserModel = require("../models/users");

const db = new Sequelize("tmdb", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});
const film = FilmModel(db, Sequelize);
const User = FilmModel(db, Sequelize);

db.sync({ force: false }).then(() => {
  console.log("sincronizada");
});
module.exports = {
  film,
  User,
};
