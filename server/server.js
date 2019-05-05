const path = require('path')
const express = require('express')

const cohortsRoute = require('./routes/cohorts')

const server = express()

<<<<<<< HEAD
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

=======
const authRoutes = require('./routes/auth')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/auth', authRoutes)
server.use('/cohorts', cohortsRoute)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

>>>>>>> 8f9a84037eb5773a290d3b865d54d1faa97e38a6
module.exports = server
