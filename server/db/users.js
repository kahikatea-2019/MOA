const connection = require('./connection')

const { generateHash } = require('../auth/hash')

module.exports = {
  createUser
}

function createUser ({ first_name, last_name, email, password, role, cohort }, db = connection) {
  return generateHash(password)
    .then(hash => db('users').insert({ first_name, last_name, email, hash, role }))
}
