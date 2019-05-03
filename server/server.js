const path = require('path')
const express = require('express')

const cohortsRoute = require('./routes/cohorts')

const server = express()

<<<<<<< HEAD
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

=======
const starterRoute = require('./routes/starter')
const authRoutes = require('./routes/auth')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/', starterRoute)
server.use('/api/v1/auth', authRoutes)
server.use('/cohorts', cohortsRoute)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

>>>>>>> 03bb3f48cd72c30a48cd4324b0415276e760ebee
module.exports = server
