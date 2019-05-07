import request from 'superagent'
import { requestAssessmentStatus, receiveAssessmentStatus } from '../actions/assessmentStatus'

export function getAssessmentStatus (id) {
  return (dispatch) => {
    dispatch(requestAssessmentStatus())
    return request
      .get(`/status/students/${id}`)
      .then(res => {
        const assessmentStatus = res.body
        dispatch(receiveAssessmentStatus(assessmentStatus))
      })
      .catch(err => {
      // eslint-disable-next-line no-console
        console.error(err)
      })
  }
}