module.exports = (sequelize, DataTypes) => {
  const Film = sequelize.define("Film", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
  });

  return Film;
};
