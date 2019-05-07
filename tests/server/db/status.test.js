const env = require('./test-environment')
const db = require('../../../server/db/status')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('getUserStatus returns the status for all assessments based on user', () => {
  return db.getUserStatus(1, testDb)
    .then(statuses => {
      expect(statuses.length).toBe(4)
    })
})
