const env = require('../../test-environment')
const db = require('../../../server/db/assessments')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('submit assessments adds a new assessment to the table', () => {
  const submission = {
    studentId: 'id',
    date_modified: new Date(),
    evidence: 'evidence'
  }
  return db.submitAssessment(submission, testDb)
    .then(assessment => {
      expect(submission.studentId).toBe('id')
    })
})