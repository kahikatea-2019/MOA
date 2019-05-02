exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', (table) => {
    table.integer('id').primary()
    table.string('firstname')
    table.string('lastname')
    table.string('email')
    table.string('hash')
    table.string('role')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
