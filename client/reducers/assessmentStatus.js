import {
  RECIEVE_ASSESSMENT_STATUSES

} from '../actions/index'
const status = (AssessmentStatus = [], action) => {
  switch (action.type) {
    case RECIEVE_ASSESSMENT_STATUSES:
      return action.statuses
    default:
      return AssessmentStatus
  }
}
export default status
