const request = require('supertest')

const server = require('../../../server/server')
const db = require('../../../server/db/users') // the mock

jest.mock('../../../server/db/users')

beforeEach(() => {
  db.reset()
})

test('POST /api/v1/register adds a new user', () => {
  return request(server)
    .post('/api/v1/auth/register')
    .send({ name: 'Blanche', surname: 'Devereaux', role: 'Golden Girl', email: 'blanched_almonds@aol.com', password: 'blanche' })
    .then(res => {
      expect(res.body.ok).toBe(true)
      expect(res.body.message).toBe('Authentication successful.')
      expect(res.body.userId).toBe(3)
      // test that token exists
    })
})

test('POST /api/v1/register stops you from adding a duplicate user', () => {
  return request(server)
    .post('/api/v1/auth/register')
    .send({ name: 'Rose', surname: 'Nylund', role: 'Golden Girl', email: 'ringarosy@aol.com', password: 'rose' })
    .then(res => {
      expect(res.body.ok).toBe(false)
      expect(res.body.message).toBe('User already exists.')
    })
})

// Success returns
// {
//   "ok": true,
//   "message": "Authentication successful.",
//   "userId": 3,
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTUxMDY1NzE3LCJleHAiOjE1NTExNTIxMTd9.BJ2NgDcOmbDmxtRUc-6y1JHfjjn3qcGaCVY5VDGduJA"
// }

// Fail returns
// {
//   "ok": false,
//   "message": "User already exists." // or similar
// }
