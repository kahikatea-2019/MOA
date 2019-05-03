const express = require('express')

const token = require('../auth/token')
const hash = require('../auth/hash')
const router = express.Router()
router.post('/signin', signIn, token.issue)

const {
  getUserbyName
}

function signIn (req, res, next) {
  getUserByName(req.body.username)
    .then(user => {
      return user
    })
    .then(user => {
      return user && hash.verify(user.hash, req.body.password)
    })
    .then(isValid => {
      return isValid ? next() : invalidCredentials(res)
    })
    .catch((err) => {
      res.status(400).send({
        errorType: err.message
        // 'DATABASE_ERROR'
      })
    })
}

function invalidCredentials (res) {
  res.status(400).send({
    errorType: 'INVALID_CREDENTIALS'
  })
}

module.exports = router
