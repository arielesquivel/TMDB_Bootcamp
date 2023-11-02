module.exports = (sequelize, DataTypes) => {
  const Film = sequelize.define("Film", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    director: DataTypes.STRING,
    description: DataTypes.STRING,
    score: DataTypes.INTEGER,
  });

  return Film;
};
