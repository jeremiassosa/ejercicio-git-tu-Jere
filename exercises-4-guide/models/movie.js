'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Genre.belongsTo(models.name,
        {foreignKey: "genre_id"}
      )
      // define association here
    }
  }
  Movie.init({
    title: DataTypes.STRING,
    synopsis: DataTypes.TEXT,
    releaseYear: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};