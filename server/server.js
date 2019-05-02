const path = require('path')
const express = require('express')

const server = express()

const cohortsRoute = require('./routes/cohorts')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/cohorts', cohortsRoute)

module.exports = server
