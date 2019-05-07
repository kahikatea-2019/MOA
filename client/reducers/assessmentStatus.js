import {
  RECEIVE_ASSESSMENT_STATUSES
} from '../actions/assessmentStatus'

const status = (AssessmentStatus = [], action) => {
  switch (action.type) {
    case RECEIVE_ASSESSMENT_STATUSES:
      return action.status
    default:
      return AssessmentStatus
  }
}
export default status
