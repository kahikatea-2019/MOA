const path = require('path')
const express = require('express')

const server = express()

const starterRoute = require('./routes/starter')
const assessmentsRoute = require('./routes/assessments')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/', starterRoute)
server.use('/assessments', assessmentsRoute)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
