import request from 'superagent'
import { requestAssesmentContent, receiveAssementContent } from '../actions/assessmentContent'

export default function getAssessments () {
  return (dispatch) => {
    dispatch(requestAssesmentContent())
    return request
      .get('/assessments')
      .then(res => {
        const assessments = res.body
        console.log('assessments:', assessments)
        dispatch(receiveAssementContent(assessments))
      })
      .catch(err => {
      // eslint-disable-next-line no-console
        console.error(err)
      })
  }
}
