exports.up = (knex, Promise) => {
  return knex.schema.createTable('modules', (table) => {
    table.integer('id').primary()
    table.string('title')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('modules')
}
