import {
  RECIEVE_ASSESSMENT_STATUSES
} from '../client/actions/index'
import reducer from '../client/reducers/AssessmentStatuses'

test('reducer handles RECIEVE_ASSESSMENT_STATUSES correctly', () => {
  const studentAssessments = {
    assessmentStatus: []
  }
  const action = {
    type: RECIEVE_ASSESSMENT_STATUSES,
    assessmentStatus: studentAssessments
  }
})
