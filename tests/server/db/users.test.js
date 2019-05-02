require('babel-polyfill')
const env = require('./test-environment')
const db = require('../../../server/db/db')

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

// test('createUser stops you from adding duplicate emails', () => {
//   const newUser = {
//     first_name: 'Rose',
//     last_name: 'Again',
//     email: 'rose@gg.com',
//     password: 'rose',
//     role: 'Golden girl'
//   }
//   return db.createUser(newUser, testDb)
//     .then(([id]) => {
//       expect(id).toBe(3)
//     })
// })
