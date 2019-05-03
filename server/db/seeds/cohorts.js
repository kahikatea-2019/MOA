exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {id: 1, name: 'Kahikatea', year: '2019', campus: 'Auckland'},
        {id: 2, name: 'Kahu', year: '2019', campus: 'Auckland'},
        {id: 3, name: 'Karearea', year: '2019', campus: 'Auckland'}
      ])
    })
}
