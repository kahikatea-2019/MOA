const path = require('path')
const express = require('express')

const server = express()

const starterRoute = require('./routes/starter')
const assessmentsRoute = require('./routes/assessments')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/', starterRoute)
server.use('/asssessments/', assessmentsRoute)

module.exports = server
