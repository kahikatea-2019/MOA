exports.up = (knex, Promise) => {
  return knex.schema.createTable('cohorts', (table) => {
    table.integer('id').primary()
    table.string('name')
    table.string('year')
    table.string('campus')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('cohorts')
}
