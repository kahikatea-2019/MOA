import request from 'superagent'
import { requestAssessmentContent, receiveAssessmentContent } from '../actions/assessmentContent'

export function getAssessments () {
  return (dispatch) => {
    dispatch(requestAssessmentContent())
    return request
      .get('/assessments')
      .then(res => {
        const assessments = res.body
        console.log('assessments:', assessments)
        dispatch(receiveAssessmentContent(assessments))
      })
      .catch(err => {
      // eslint-disable-next-line no-console
        console.error(err)
      })
  }
}
