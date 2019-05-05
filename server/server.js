const path = require('path')
const express = require('express')

const cohortsRoute = require('./routes/cohorts')

const server = express()

<<<<<<< HEAD
<<<<<<< HEAD
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

=======
=======

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

>>>>>>> e1ec352b30e181a3345a5513b6ff8f41724c1f10
const authRoutes = require('./routes/auth')

server.use('/api/v1/auth', authRoutes)
server.use('/cohorts', cohortsRoute)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

<<<<<<< HEAD
>>>>>>> 8f9a84037eb5773a290d3b865d54d1faa97e38a6
=======

>>>>>>> e1ec352b30e181a3345a5513b6ff8f41724c1f10
module.exports = server
