const request = require('supertest')

const server = require('../../../client/components/Register')

test('test harness is setup correctly', () => {
  expect(true).toBe(true)
})

test('/register return a status of 200', () => {
  request(server)
    .get('/register')
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull()
    })
})
