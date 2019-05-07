const request = require('supertest')

const server = require('../../../server/server')
const db = require('../../../server/db/assessments')

jest.mock('../../../server/db/assessments')

beforeEach(() => {
  db.reset()
  jest.resetModules()
})

test('GET /assessments returns all 24 assessments as JSON', () => {
  return request(server)
    .get('/assessments')
    .then(res => {
      expect(res.type).toBe('application/json')
      expect(res.body).toHaveLength(24)
    })
})

test('GET /assessments sends back a 500 on db error', () => {
  db.getAssessments = () => Promise.reject(new Error('database error'))

  return request(server)
    .get('/assessments')
    .then(res => {
      expect(res.status).toBe(500)
    })
})

test('/assessments/:id sends back a 200 status', () => {
  request(server)
    .get('/assessments/:id')
    .expect(200)
    .then(res => {
      expect(res.body.name).toHaveLength()
    })
})
