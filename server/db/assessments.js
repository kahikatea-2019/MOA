const environment = process.env.NODE_ENV || 'development'
const config = require('../db/knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  submitAssessment
}

function submitAssessment (assessment, db = connection) {
  return db('student_assessments')
    .insert(JSON.stringify({
      evidence: assessment.evidence,
      date: assessment.date,
      studentId: assessment.studentId
    }))
}
