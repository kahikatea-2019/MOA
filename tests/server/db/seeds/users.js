exports.seed = (knex, Promise) => {
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, first_name: 'Rose', last_name: 'Nylund', email: 'rose@gg.com', hash: 'fake_hash', role: 'Golden Girl' },
        { id: 2, first_name: 'Dorothy', last_name: 'Zbornak', email: 'dotty@gg.com', hash: 'fake_hash', role: 'Golden Girl' }
      ])
    })
}
