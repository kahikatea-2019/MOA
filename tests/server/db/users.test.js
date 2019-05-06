const env = require('./test-environment')
const db = require('../../../server/db/users')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('createUser adds a new user', () => {
  const newUser = {
    first_name: 'Blanche',
    last_name: 'Devereaux',
    email: 'blanched_almonds@gg.com',
    password: 'blanche',
    role: 'Golden girl'
  }
  return db.createUser(newUser, testDb)
    .then(([id]) => {
      expect(id).toBe(3)
    })
})

test('getUser returns an individual user', () => {
  return db.getUser(1, testDb)
    .then(users => {
      expect(users.email).toBe('rose@gg.com')
    })
})
