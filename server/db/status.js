const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUserStatus
}

function getUserStatus (id, db = connection) {
  return db('students_assessments')
    .where('student_id', id)
    .select('id as studentAssmtId', 'student_id as studentId', 'status_id as statusId', 'evidence', 'date_modified as dateModified')
}
