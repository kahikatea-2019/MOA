const path = require('path')
const express = require('express')

const cohortsRoute = require('./routes/cohorts')

const server = express()

const assessmentsRoute = require('./routes/assessments')
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

const authRoutes = require('./routes/auth')

server.use('/assessments', assessmentsRoute)
server.use('/api/v1/auth', authRoutes)
server.use('/cohorts', cohortsRoute)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
