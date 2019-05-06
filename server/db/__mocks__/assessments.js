module.exports = {
  reset,
  clear,
  getAssessments
}

const defaultAssessments = require('./assessmentsInitialData')

let assessments = defaultAssessments

function reset () {
  assessments = [ ...defaultAssessments ]
}

function clear () {
  assessments = []
}

function getAssessments () {
  return Promise.resolve(assessments)
}
