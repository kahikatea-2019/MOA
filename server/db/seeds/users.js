exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, first_name: 'Jane', last_name: 'Doe', email: 'janedoe@mail.com', hash: '#', role: 'facilitator' },
        { id: 2, first_name: 'John', last_name: 'Doe', email: 'johndoe@mail.com', hash: '#', role: 'student' }
      ])
    })
}
