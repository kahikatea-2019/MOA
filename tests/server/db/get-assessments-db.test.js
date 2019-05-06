const env = require('./test-environment')
const db = require('../../../server/db/assessments')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('getAssessments function returns all Assessment data from db', () => {
  return db.getAssessments(testDb)
    .then(assessments => {
      expect(assessments.length).toBe(4)
    })
})
