require('dotenv').config()

const express = require("express");
const sequelize = require("./config");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./routes'))

sequelize
  .sync()
  .then(() => app.listen(3001))
  .catch((err) => console.error(err));
