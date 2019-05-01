exports.up = (knex, Promise) => {
  return knex.schema.createTable('statuses', (table) => {
    table.integer('id').primary()
    table.string('name')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('statuses')
}
