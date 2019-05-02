const environment = process.env.NODE_ENV || 'development'
const config = require('../db/knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  postSignin
}

function postSignin (id, db = connection) {
  return db('signin')
    .where('Id', Id)
    .first()
}
