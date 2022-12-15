const express = require("express");
const sequelize = require("./config");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const { Model, DataTypes } = require("sequelize");

class User extends Model {}

User.init({
  username: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
}, {
  sequelize,
  timestamps: true,
  modelName: 'user'
});

sequelize
  .sync()
  .then(() => app.listen(3001))
  .catch((err) => console.error(err));
