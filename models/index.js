const User = require('./User.js')
const Movie = require('./Movie.js')

User.hasMany(Movie, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
})

// User.hasOne(Movie, {
//   foreignKey: 'userId',
//   onDelete: 'CASCADE'
// })

Movie.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
})

module.exports = { User, Movie }
