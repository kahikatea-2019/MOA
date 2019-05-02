const connection = import('./connection')

const { generateHash } = import('../auth/hash')

module.exports = {
  createUser
}

function createUser ({ name, surname, role, email, password }, db = connection) {
  return generateHash(password)
    .then(hash => db('users').insert({ name, surname, role, email, hash }))
}
