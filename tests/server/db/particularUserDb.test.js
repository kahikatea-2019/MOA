const env = require('../../test-environment')
const db = require('../../../server/db/users')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('getUser returns an individual user', () => {
  return db.getUser(1, testDb)
    .then(users => {
      expect(users.email).toBe('rose@gg.com')
    })
})