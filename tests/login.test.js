const request = require('supertest')
const cheerio = require('cheerio')

const server = require('../server/server')

test('test harness is set up correctly', () => {
  expect(true).toBe(true)
})

test('Login returns a <input>', () => {
  request(server)
    .get('/')
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull()
      const $ = cheerio.load(res.text)
      const inputLength = $('input').length
      expect(inputLength).toBe(2)
    })
})
test('Login returns a <p>', () => {
  request(server)
    .get('/')
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull()
      const $ = cheerio.load(res.text)
      const pLength = $('p').length
      expect(pLength).toBe(2)
    })
})