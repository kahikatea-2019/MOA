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
    .select('assessments.id', 'assessments.module_id', 'modules.id', 'assessments.title', 'assessments.description')
}
