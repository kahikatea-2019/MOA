const request = require('supertest')

const server = require('../../../server/server')
const db = require('../../../server/db/assessments')

jest.mock('../../../server/db/assessments')

beforeEach(() => {
  db.reset()
})

test('GET /assessments returns all 24 assessments as JSON', () => {
  return request(server)
    .get('/assessments')
    .then(res => {
      expect(res.type).toBe('application/json')
      expect(res.body).toHaveLength(24)
    })
})
