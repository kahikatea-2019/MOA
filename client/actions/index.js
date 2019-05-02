
export const REQUEST_ASSESSMENT_CONTENT = 'REQUEST_ASSESSMENT_CONTENT'
export const RECIEVE_ASSESSMENT_CONTENT = 'RECIEVE_ASSESSMENT_CONTENT'

export const REQUEST_ASSESSMENT_STATUSES = 'REQUEST_ASSESSMENT_STATUSES'

export const RECIEVE_ASSESSMENT_STATUSES = 'RECIEVE_ASSESSMENT_STATUSES'


// Actions for Assessment Content
export const requestAssessmentContent = (assessment_id) => {
  return {
    type: REQUEST_ASSESSMENT_CONTENT,
    assessment_id
  }
}

export const recieveAssessmentContent = (assessment_id) => {
  return {
    type: RECIEVE_ASSESSMENT_CONTENT,
    assessment_id
  }
}

// Actions for Student Information
// status id = id

export const REQUEST_ASSESSMENT_STATUSES = (id) =>{
  return {
  type: REQUEST_ASSESSMENT_STATUSES,
  id
}
}
export const RECIEVE_ASSESSMENT_STATUSES = (id) =>{
  return {
  type:RECIEVE_ASSESSMENT_STATUSES,
  id
}
}