const request = require('supertest')

const server = require('../routes')

test('GET / returns cohorts', () => {
  request(server)
    .get('/')
    .end((err, res) => {
      expect(err).toBeNull()
    })
})
