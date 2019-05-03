export const REQUEST_ASSESSMENT_STATUSES = 'REQUEST_ASSESSMENT_STATUSES'
export const RECIEVE_ASSESSMENT_STATUSES = 'RECIEVE_ASSESSMENT_STATUSES'

export const requestAssessmentStatuses = () => {
  return {
    type: REQUEST_ASSESSMENT_STATUSES

  }
}
export const recieveAssessmentStatuses = (studentAssessments) => {
  return {
    type: RECIEVE_ASSESSMENT_STATUSES,
    studentAssessments
  }
}
