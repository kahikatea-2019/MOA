import { RECIEVE_ASSESSMENT_CONTENT } from '../../../client/actions/AssessmentContent'

import reducer from '../../../client/reducers/AssessmentContent'

test('reducer populates some initial state', () => {
  const newState = reducer(undefined, '@@INIT')
  expect(Array.isArray(newState)).toBeTruthy()
})

test('reducer handles RECIEVE_ASSESSMENT_CONTENT correctly', () => {
  // Arrange
  const AssessmentContent = {
    content: [0, 1, 2, 3]
  }
  const action = {
    type: RECIEVE_ASSESSMENT_CONTENT,
    content: AssessmentContent
  }
  // Act
  const newState = reducer(AssessmentContent, action)

  // Assert

  expect(newState).toBe(AssessmentContent)
})
