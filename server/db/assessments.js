const environment = process.env.NODE_ENV || 'development'
const config = require('../db/knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAssessments,
  submitAssessment
}

function getAssessments (db = connection) {
  return db('assessments')
    .join('modules', 'modules.id', 'assessments.module_id')
    .select('assessments.id', 'assessments.module_id', 'modules.id', 'assessments.title', 'assessments.description')
}
function submitAssessment (submission, db = connection) {
  return db('students_assessments')
    .where({ student_id: submission.studentId })
    .update({ evidence: submission.evidence, date_modified: submission.date_modified })
}
