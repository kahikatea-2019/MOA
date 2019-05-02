// require('babel-polyfill')
const env = require('./test-environment')
const db = require('../server/db/cohorts')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('getCohort returns an individual cohort', () => {
  const cohorts = [ {
    id: 1,
    name: 'Kahikatea',
    year: 2019,
    campus: 'Auckland'
  },
  {
    id: 2,
    name: 'testGroup',
    year: 2019,
    campus: 'Hamilton'
  } ]

  return db.getCohort(1, cohorts)
    .then(cohorts => {
      expect(cohorts.name).toBe('Kahikatea')
    })
})
