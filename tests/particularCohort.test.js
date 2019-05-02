const request = require('supertest')
const cheerio = require('cheerio')

const server = require('../server/server.js')

test('/cohorts/:id returns an individual cohort', () => {
  request(server)
    .get('/cohorts/:id')
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull()
      const $ = cheerio.load(res.text)
      const pLength = $('body > p').length
      expect(pLength).toBe(1)
    })
})