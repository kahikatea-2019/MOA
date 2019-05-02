const path = require('path')
const express = require('express')

const server = express()

const starterRoute = require('./routes/starter')
const signinRoute = require('./routes/signin')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/', starterRoute)
server.use('/id', signinRoute)
module.exports = server
