const environment = process.env.NODE_ENV || 'development'
const config = require('../db/knexfile')[environment]
const connection = require('knex')(config)
const { generateHash } = require('../auth/hash')

module.exports = {
  getUser,
  createUser
}

function getUser (id, db = connection || testDb) {
  return db('users')
    .where('id', id)
    .first()
}

function createUser ({ firstName, lastName, email, password, role, cohort }, db = connection) {
  return generateHash(password)
    .then(hash => db('users').insert({ firstName, lastName, email, hash, role, cohort }))
}