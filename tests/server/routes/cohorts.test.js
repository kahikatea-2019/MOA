const request = require('supertest')

const server = require('../../../server/routes/cohorts')

test('GET /cohorts returns all cohorts', () => {
  request(server)
    .get('/cohorts')
    .then(res => {
      expect(res.body.name).toHaveLength()
    })
})

test('/cohorts/:id sends back a 200 status', () => {
  request(server)
    .get('/cohorts/:id')
    .expect(200)
    .then(res => {
      expect(res.body.name).toHaveLength()
    })
})
