exports.up = (knex, Promise) => {
  return knex.schema.createTable('students_assessments', (table) => {
    table.integer('id').primary()
    table.integer('student_id').references('students.id')
    table.integer('assessment_id').references('assessments.id')
    table.integer('status_id').references('statuses.id')
    table.string('evidence')
    table.datetime('date_modified')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('students_assessments')
}
