const env = require('./test-environment')
const db = require('../server/db/assessments')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('getAssessments function returns all Assessment data from db', () => {
  const assessmentsSample = [
    {
      id: 1,
      module_id: 1,
      title: '1. Use Git and terminal commands to manage a code base',
      description: 'desc',
      link: 'link',
      week_day: 'weekday'
    },
    {
      id: 2,
      module_id: 1,
      title: '2. Use npm to manage library dependencies',
      description: 'desc',
      link: 'link',
      week_day: 'weekday'
    }
  ]

  return db.getAssessments(assessmentsSample)
    .then(assessments => {
      expect(assessments.length).toBe(2)
    })
})
