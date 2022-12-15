const users = require('express').Router()
const { User } = require('../models')

users.get('/', (req, res) => {
  User.findAll()
    .then(users => res.json(users))
    .catch(err => console.error(err))
})

users.post('/', (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => console.error(err))
})

users.put('/:id', (req, res) => {
  User.update(req.body, { where: { id: req.params.id } })
    .then(user => res.json(user))
    .catch(err => console.error(err))
})

users.delete('/:id', (req, res) => {
  User.destroy({ where: { id: req.params.id } })
    .then(user => res.json(user))
    .catch(err => console.error(err))
})

module.exports = users
