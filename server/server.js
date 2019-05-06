const path = require('path')
const express = require('express')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

const assessmentsRoute = require('./routes/assessments')
const cohortsRoute = require('./routes/cohorts')
const authRoutes = require('./routes/auth')
const userRoute = require('./routes/users')

server.use('/assessments', assessmentsRoute)
server.use('/cohorts', cohortsRoute)
server.use('/users', userRoute)
server.use('/api/v1/auth', authRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
