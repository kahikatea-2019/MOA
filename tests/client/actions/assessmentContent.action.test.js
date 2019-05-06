import {
  requestAssessmentContent,
  receiveAssessmentContent,
  REQUEST_ASSESSMENT_CONTENT,
  RECEIVE_ASSESSMENT_CONTENT
} from '../../../client/actions/assessmentContent'

test('requestAssessmentContent creates a correct action', () => {
  const name = 'test assessmentContent'
  const action = requestAssessmentContent(name)
  expect(action.type).toBe(REQUEST_ASSESSMENT_CONTENT)
})

test('receiveAssessmentContent creates a correct action', () => {
  const name = 'test content'
  const action = receiveAssessmentContent(name)
  expect(action.type).toBe(RECEIVE_ASSESSMENT_CONTENT)
  expect(action.content).toBe(name)
})
