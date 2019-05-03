const environment = process.env.NODE_ENV || 'development'
const config = require('../db/knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAssessments
}

// function to retrieve all 'assessments' data including joining assessments + modules tables
function getAssessments (db = connection) {
  return db('assessments')
    .join('modules', 'modules.id', 'assessments.module_id')
    .select('assessment.id', 'assessment.module_id', 'modules.id', 'assessment.title', 'assessment.description', 'assessment.link', 'assessment.week_day')
}
