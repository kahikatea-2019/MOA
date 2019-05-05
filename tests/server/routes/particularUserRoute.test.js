const request = require('supertest')
const cheerio = require('cheerio')

const server = require('../../../server/server')

test('/users/:id sends back a 200 status', () => {
  request(server)
    .get('users/:id')
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull()
      const $ = cheerio.load(res.text)
      const pLength = $('body > p').length
      expect(pLength).toBe(1)
    })
})
