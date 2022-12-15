const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

class User extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: true,
    modelName: "user",
  }
);

module.exports = User
