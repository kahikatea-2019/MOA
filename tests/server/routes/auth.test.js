const request = require('supertest')

const server = require('../../../server/server.js')

test.skip('POST /api/v1/register adds a new user', () => {
  return request(server)
    .post('/api/v1/auth/register')
    .expect(200)
    .send({
      firstName: 'Blanche',
      lastName: 'Devereaux',
      email: 'aaaaaa@gg.com',
      password: 'blanche',
      role: 'Golden girl',
      cohort: 'Golden girls'
    })
    .then(res => {
      (res.body.ok).toBe(true)
      expect(res.body.message).toBe('Authentication successful.')
      expect(res.body.token).not.toBeNull()
    })
})
