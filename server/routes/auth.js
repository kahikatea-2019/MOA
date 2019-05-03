const express = require('express')

const { createUser } = require('../db/users')
const token = require('../auth/token')
const hash = require('../auth/hash')
const router = express.Router()

// Register user route at /api/v1/auth/register
router.post('/register', register, token.issue)

function register (req, res, next) {
  const { firstName, lastName, email, password, role, cohort } = req.body
  createUser({ firstName, lastName, email, password, role, cohort })
    .then(([id]) => {
      res.locals.userId = id
      next()
    })
    .catch(({ message }) => {
      // note that message is used with SQLite, but if db is changed this may need to be updated
      if (message.includes('UNIQUE constraint failed: users.email')) {
        return res.status(400).json({
          ok: false,
          message: 'Email already exists in database.'
        })
      }
      res.status(500).json({
        ok: false,
        message: "Something bad happened. We don't know why."
      })
    })
}

router.post('/sigIn', signIn, token.issue)

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
      })
    })
}

function invalidCredentials (res) {
  res.status(400).send({
    errorType: 'INVALID_CREDENTIALS'
  })
}
module.exports = router
