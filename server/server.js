const path = require('path')
const express = require('express')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

const cohortsRoute = require('./routes/cohorts')
const authRoutes = require('./routes/auth')
const userRoute = require('./routes/users')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/auth', authRoutes)
server.use('/cohorts', cohortsRoute)
server.use('/users', userRoute)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
