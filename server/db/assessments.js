const environment = process.env.NODE_ENV || 'development'
const config = require('../db/knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  submitAssessment
}

function submitAssessment (submission, db = connection) {
  return db('student_assessments')
    .where({ id: submission.id })
    .update({ evidence: submission.evidence, date: submission.date })
}
