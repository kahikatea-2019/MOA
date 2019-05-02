const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCohorts
}

function getCohorts (db = connection) {
  return db('cohorts').select()
}
