const request = require('supertest')

const server = require('../../../server/server.js')

test('/assessments route sends back 200 status', () => {
  request(server)
  // access GET route and expect connection
    .get('/assessments')
    .expect(200)
})
