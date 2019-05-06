const request = require('supertest')

const server = require('../../../server/server.js')

test('/cohorts/:id sends back a 200 status', () => {
  request(server)
    .get('/cohorts/:id')
    .expect(200)
    .then(res => {
      expect(res.body.name).toHaveLength()
    })
})
