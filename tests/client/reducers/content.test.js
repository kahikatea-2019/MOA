import {
  RECIEVE_ASSESSMENT_CONTENT
} from '../../../client/actions/assessmentContent'

import reducer from '../../../client/reducers/assessmentContent'

test('reducer populates some initial state', () => {
  const newState = reducer(undefined, '@@INIT')
  expect(Array.isArray(newState)).toBeTruthy()
})

test('reducer handles RECIEVE_ASSESSMENT_CONTENT correctly', () => {
  // Arrange
  const assessmentContent = {
    content: [0, 1, 2, 3]
  }
  const action = {
    type: RECIEVE_ASSESSMENT_CONTENT,
    content: assessmentContent
  }
  // Act
  const newState = reducer(assessmentContent, action)

  // Assert

  expect(newState).toBe(assessmentContent)
})
