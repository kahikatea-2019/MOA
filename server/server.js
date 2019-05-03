const path = require('path')
const express = require('express')

const cohortsRoute = require('./routes/cohorts')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

server.use('/cohorts', cohortsRoute)

module.exports = server
