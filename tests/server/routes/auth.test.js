const request = require('supertest')

const server = require('../../../server/server.js')

test('POST /api/v1/register adds a new user', () => {
  return request(server)
    .post('/api/v1/auth/register')
    .send({
      firstName: 'Blanche',
      lastName: 'Devereaux',
      email: 'aaaaaa@gg.com',
      password: 'blanche',
      role: 'Golden girl',
      cohort: 'Golden girls'
    })
    .then(res => {
      expect(res.body.ok).toBe(false)
      expect(res.body.token).not.toBeNull()
    })
})