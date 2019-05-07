exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('assessments').del()
    .then(function () {
      // Inserts seed entries
      return knex('assessments').insert([
        { id: 1, module_id: 1, title: '1. Use Git and terminal commands to manage a code base', description: 'desc' },
        { id: 2, module_id: 1, title: '2. Use npm to manage library dependencies', description: 'desc' },
        { id: 3, module_id: 1, title: '3. Create well structured and tested code using JavaScript ES6', description: 'desc' },
        { id: 4, module_id: 1, title: '4. Design, build and use a relational database to persist data', description: 'desc' }
      ])
    })
}
