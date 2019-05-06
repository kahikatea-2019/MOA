import {
  requestAssessmentStatuses,
  receiveAssessmentStatuses,
  REQUEST_ASSESSMENT_STATUSES,
  RECEIVE_ASSESSMENT_STATUSES
} from '../../../client/actions/assessmentStatus'

test('requestAssessmentStatuses creates a correct action', () => {
  const name = 'test assessmentStatuses'
  const action = requestAssessmentStatuses(name)
  const expectedAction = {
    type: REQUEST_ASSESSMENT_STATUSES
  }
  expect(action).toEqual(expectedAction)
})

test('receiveAssessmentStatuses creates a correct action', () => {
  const name = 'test studentAssessments'
  const action = receiveAssessmentStatuses(name)
  expect(action.type).toBe(RECEIVE_ASSESSMENT_STATUSES)
  expect(action.studentAssessments).toBe(name)
})
