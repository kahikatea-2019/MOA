const path = require('path')
const express = require('express')

const server = express()

const userRoute = require('./routes/users')
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/users', userRoute)
module.exports = server
