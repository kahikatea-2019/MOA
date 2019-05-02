const env = require('./test-environment')
const db = require('../server/db/users')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('getUser returns an individual user', () => {
  const users = [ {
    id: 1,
    name: 'Ihaka',
    surname: 'Pink',
    email: 'ihakapink@gmail.com',
    role: 'student'
  },
  {
    id: 2,
    name: 'Paul',
    surname: 'Renwick',
    email: 'paul@gmail.com',
    role: 'staff'
  }]

  return db.getUser(1, users)
    .then(users => {
      expect(users.name).toBe('users')
    })
})
