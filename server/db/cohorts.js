const environment = process.env.NODE_ENV || 'development'
const config = require('../db/knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCohort,
  getCohorts
}

function getCohort (id, db = connection ) {
  return db('cohorts')
    .where('id', id)
    .first()
}

function getCohorts (db = connection) {
  return db('cohorts').select()
}