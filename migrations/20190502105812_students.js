exports.up = (knex, Promise) => {
  return knex.schema.createTable('students', (table) => {
    table.integer('id').primary()
    table.integer('user_id').references('users.id')
    table.integer('cohort_id').references('cohorts.id')
    table.string('first_name')
    table.string('last_name')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('students')
}
