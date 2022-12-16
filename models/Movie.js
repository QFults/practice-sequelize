const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

class Movie extends Model { }

Movie.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: true,
  modelName: 'movie'
})

module.exports = Movie
