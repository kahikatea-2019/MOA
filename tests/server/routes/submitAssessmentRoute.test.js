const request = require('supertest')

const server = require('../../../server/server.js')

test('/assessments/:id sends back a 200 status', () => {
  request(server)
    .get('/assessments/:id')
    .expect(200)
    .then(res => {
      expect(res.body.name).toHaveLength()
    })
})
