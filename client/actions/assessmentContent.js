import { getAssessments } from '../api/assessmentContent'

export const REQUEST_ASSESSMENT_CONTENT = 'REQUEST_ASSESSMENT_CONTENT'
export const RECEIVE_ASSESSMENT_CONTENT = 'RECEIVE_ASSESSMENT_CONTENT'

export const requestAssessmentContent = () => {
  return {
    type: REQUEST_ASSESSMENT_CONTENT
  }
}

export const receiveAssessmentContent = (content) => {
  return {
    type: RECEIVE_ASSESSMENT_CONTENT,
    content
  }
}

export function getAsmtContent () {
  return (dispatch) => {
    dispatch(requestAssessmentContent())
    getAssessments()
      .then(content => {
        dispatch(receiveAssessmentContent(content))
        console.log(content)
      })
  }
}
