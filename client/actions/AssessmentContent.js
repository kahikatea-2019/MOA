export const REQUEST_ASSESSMENT_CONTENT = 'REQUEST_ASSESSMENT_CONTENT'
export const RECIEVE_ASSESSMENT_CONTENT = 'RECIEVE_ASSESSMENT_CONTENT'

export const requestAssessmentContent = () => {
  return {
    type: REQUEST_ASSESSMENT_CONTENT
  }
}

export const recieveAssessmentContent = (content) => {
  return {
    type: RECIEVE_ASSESSMENT_CONTENT,
    content
  }
}
