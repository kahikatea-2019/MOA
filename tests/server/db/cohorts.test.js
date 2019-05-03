const env = require('./test-environment')
const db = require('../../../server/db/cohorts')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('getCohorts returns a list of all cohorts', () => {
  return db.getCohorts(testDb)
    .then(cohorts => {
      expect(cohorts.length).toBe(1)
    })
})
