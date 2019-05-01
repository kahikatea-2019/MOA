exports.up = (knex, Promise) => {
  return knex.schema.createTable('students_assessments', (table) => {
    table.integer('id').primary()
    table.integer('student_id')
    table.integer('assessment_id')
    table.integer('status_id')
    table.string('evidence')
    table.string('date_modified')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('students_assessments')
}
