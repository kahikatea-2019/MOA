const express = require('express')
const router = express.Router()
const db = require('../db/signin.js')

router.post('/', (req, res) => {
  db.postSignin(signin)
    .then(signin => res.send('signin', signin))
    .catch(err => res.status(500).send(err.message))
})
module.exports = router
