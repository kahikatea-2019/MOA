import {
  RECIEVE_ASSESSMENT_STATUSES
} from '../actions/assessmentStatus'

const status = (AssessmentStatus = [], action) => {
  switch (action.type) {
    case RECIEVE_ASSESSMENT_STATUSES:
      return action.status
    default:
      return AssessmentStatus
  }
}
export default status
