const environment = process.env.NODE_ENV || 'development'
const config = require('../db/knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser
}

function getUser (id, db = connection || testDb) {
  return db('users')
    .where('id', id)
    .first()
}
