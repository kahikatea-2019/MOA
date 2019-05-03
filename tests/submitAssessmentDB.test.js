const env = require('./test-environment')
const db = require('../server/db/assessments')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('submit assessments adds a new assessment to the table', () => {

  return db.submitAssessment(assessment, testDb)
    .then(assessment => {
      expect(assessment.slength).toBe('fillthisin')
    })
})