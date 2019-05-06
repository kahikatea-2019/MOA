import {
  RECIEVE_ASSESSMENT_STATUSES
} from '../../../client/actions/assessmentStatus'

import reducer from '../../../client/reducers/assessmentStatus'

test('reducer populates some initial state', () => {
  const newState = reducer(undefined, '@@INIT')
  expect(Array.isArray(newState)).toBeTruthy()
})

test('reducer handles RECIEVE_ASSESSMENT_STATUSES correctly', () => {
  // Arrange
  const AssessmentStatus = {
    status: [ 0, 1, 2, 3 ]
  }
  const action = {
    type: RECIEVE_ASSESSMENT_STATUSES,
    status: AssessmentStatus
  }
  // Act
  const newState = reducer(AssessmentStatus, action)
  // Assert
  expect(newState).toBe(AssessmentStatus)
})
