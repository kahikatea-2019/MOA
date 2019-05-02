const request = require('supertest')
// const cheerio = require('cheerio')

const server = require('../../server/routes')
const db = require('../db/cohorts.test')

beforeEach(() => {
  db.reset()
})

test('GET / returns cohorts', () => {
  request(server)
    .get('/')
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull()
    })
})
