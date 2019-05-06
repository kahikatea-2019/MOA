import {
  requestAssessmentStatuses,
  recieveAssessmentStatuses,
  REQUEST_ASSESSMENT_STATUSES,
  RECIEVE_ASSESSMENT_STATUSES
} from '../../../client/actions/assessmentStatus'

test('requestAssessmentStatuses creates a correct action', () => {
  const name = 'test assessmentStatuses'
  const action = requestAssessmentStatuses(name)
  const expectedAction = {
    type: REQUEST_ASSESSMENT_STATUSES
  }
  expect(action).toEqual(expectedAction)
})

test('recieveAssessmentStatuses creates a correct action', () => {
  const name = 'test studentAssessments'
  const action = recieveAssessmentStatuses(name)
  expect(action.type).toBe(RECIEVE_ASSESSMENT_STATUSES)
  expect(action.studentAssessments).toBe(name)
})
