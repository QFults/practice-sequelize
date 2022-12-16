const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config");

class User extends Model {
  getRandNum () {
    return Math.floor(Math.random() * 100)
  }
  checkPassword (password) {
    return bcrypt.compareSync(password, this.password)
  }
}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (newUser) => {
        newUser.email = await newUser.email.toLowerCase();
        newUser.password = await bcrypt.hash(newUser.password, 10);
        return newUser;
      },
      beforeUpdate: async (updatedUser) => {
        updatedUser.email = await updatedUser.email.toLowerCase();
        if (updatedUser.password) {
          updatedUser.password = await bcrypt.hash(updatedUser.password, 10);
        }
        return updatedUser;
      },
    },
    sequelize,
    timestamps: true,
    modelName: "user",
  }
);

module.exports = User;
