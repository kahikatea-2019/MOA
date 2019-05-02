require('babel-polyfill')
const request = require('supertest')

const server = require('../../../server/routes/cohorts')

test('GET /cohorts returns all cohorts', () => {
  request(server)
    .get('/cohorts')
    .then(res => {
      expect(res.body.name).toHaveLength()
    })
})
