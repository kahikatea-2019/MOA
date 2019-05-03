import {
  RECIEVE_ASSESSMENT_STATUSES
} from '../client/actions/index'
import reducer from '../client/reducers/AssessmentStatuses'

test('reducer populates some initial state', () => {
  const newState = reducer(undefined, '@@INIT')
  expect(Array.isArray(newState.assessmentStatus)).toBeTruthy()
})

test('reducer handles RECIEVE_ASSESSMENT_STATUSES correctly', () => {
  // Arrange
  const studentAssessments = {
    assessmentStatus: [0, 1, 2, 3]
  }
  const action = {
    type: RECIEVE_ASSESSMENT_STATUSES,
    assessmentStatus: studentAssessments
  }
  // Act
  const newState = reducer(studentAssessments, action)
  // Assert
  expect(newState.assessmentStatus.length).toBe(4)
  expect(newState).toBe(studentAssessments)
})

test('reducer returns null when action does not match', () => {
  const studentAssessments = {
    assessmentStatus: [0, 1, 2, 3]
  }
  const action = {
    type: 'UNKNOWN_ACTION'
  }
  const newState = reducer(studentAssessments, action)
  expect(newState).toBe(null)
})
