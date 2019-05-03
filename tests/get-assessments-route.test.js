const request = require('supertest')
const cheerio = require('cheerio')

const server = require('../server/server')

test('/assessments route sense back 200 status', () => {
  request(server)
  // access GET route and expect connection
    .get('/assessments')
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull()
      const $ = cheerio.load(res.text)
      const pLength = $('body > p').length
      expect(pLength).toBe(1)
    })
})
