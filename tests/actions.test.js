import { requestAssessmentStatuses, recieveAssessmentStatuses,
  REQUEST_ASSESSMENT_STATUSES,
  RECIEVE_ASSESSMENT_STATUSES
} from '../client/actions/index'

test('requestAssessmentStatuses creates a correct action', () => {
  const name = 'test assessmentStatuses'
  const action = requestAssessmentStatuses(name)
  expect(action.type).toBe(REQUEST_ASSESSMENT_STATUSES)
  expect(action.assessmentStatuses).toBe(name)
})

test('recieveAssessmentStatuses creates a correct action', () => {
  const name = 'test assessmentStatuses'
  const action = recieveAssessmentStatuses(name)
  expect(action.type).toBe(RECIEVE_ASSESSMENT_STATUSES)
  expect(action.assessmentStatuses).toBe(name)
})
