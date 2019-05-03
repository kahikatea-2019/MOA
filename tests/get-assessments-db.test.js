const env = require('./')


const request = require('supertest')
const cheerio = require('cheerio')

const server = require('../server/server')

test('good tricks'), () => {
  request(server)
})