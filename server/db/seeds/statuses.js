exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { id: 1, name: 'not started' },
        { id: 2, name: 'in progress' },
        { id: 3, name: 'done - awaiting review' },
        { id: 4, name: 'completed' }
      ])
    })
}
