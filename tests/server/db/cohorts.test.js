const request = require('supertest')
// const cheerio = require('cheerio')

const server = require('../db')

test('test cohorts is setup correctly', () => {
  expect(true).toBe(true)
})

test('getCohorts returns a list of all cohorts', () => {
  request(server)
    .get('/')
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull()
    })
})
