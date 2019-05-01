exports.up = (knex, Promise) => {
  return knex.schema.createTable('exercises', (table) => {
    table.integer('id').primary()
    table.integer('assessment_id')
    table.string('title')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('exercises')
}
