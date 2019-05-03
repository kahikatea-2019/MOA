const environment = process.env.NODE_ENV || 'development'
const config = require('../db/knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  submitAssessment
}

function submitAssessment (submission, db = connection) {
  return db('student_assessments')
    .where({ student_id: submission.studentId })
    .update({ evidence: submission.evidence, date: submission.date })
}
