const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

class User extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true 
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    hooks: {
      beforeCreate: async (newUser) => {
        newUser.email = await newUser.email.toLowerCase()
        return newUser
      },
      beforeUpdate: async (updatedUser) => {
        updatedUser.email = await updatedUser.email.toLowerCase()
        return updatedUser
      }
    },
    sequelize,
    timestamps: true,
    modelName: "user",
  }
);

module.exports = User
