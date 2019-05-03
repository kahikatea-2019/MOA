exports.up = (knex, Promise) => {
  return knex.schema.createTable('assessments', (table) => {
    table.integer('id').primary()
    table.integer('module_id').references('modules.id')
    table.string('title')
    table.string('description')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('assessments')
}
