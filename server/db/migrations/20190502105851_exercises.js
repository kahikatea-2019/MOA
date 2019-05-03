exports.up = (knex, Promise) => {
  return knex.schema.createTable('exercises', (table) => {
    table.integer('id').primary()
    table.integer('assessment_id').references('assessments.id')
    table.string('title')
    table.string('link')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('exercises')
}
