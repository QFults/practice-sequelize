require('dotenv').config()

const sequelize = require('../config')
const { User, Movie } = require('../models')

const userSeed = require('./users.json')
const movieSeed = require('./movies.json')

const seedDB = async () => {
  await sequelize.sync({ force: true })
  await User.bulkCreate(userSeed, { individualHooks: true })
  await Movie.bulkCreate(movieSeed)

  process.exit()
}

seedDB()
