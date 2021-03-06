const express = require('express')

const { createUser } = require('../db/users')
const token = require('../auth/token')

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

module.exports = router
