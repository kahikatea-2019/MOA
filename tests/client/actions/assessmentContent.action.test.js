import { 
  requestAssessmentContent,
  recieveAssessmentContent,
  REQUEST_ASSESSMENT_CONTENT,
  RECIEVE_ASSESSMENT_CONTENT
} from '../../../client/actions/assessmentContent'

test('requestAssessmentContent creates a correct action', () => {
  const name = 'test assessmentContent'
  const action = requestAssessmentContent(name)
  expect(action.type).toBe(REQUEST_ASSESSMENT_CONTENT)
})

test('recieveAssessmentContent creates a correct action', () => {
  const name = 'test content'
  const action = recieveAssessmentContent(name)
  expect(action.type).toBe(RECIEVE_ASSESSMENT_CONTENT)
  expect(action.content).toBe(name)
})
