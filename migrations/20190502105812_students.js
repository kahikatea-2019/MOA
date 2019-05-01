exports.up = (knex, Promise) => {
  return knex.schema.createTable('students', (table) => {
    table.integer('id').primary()
    table.integer('user_id')
    table.integer('cohort_id')
    table.string('first_name')
    table.string('last_name')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('students')
}
