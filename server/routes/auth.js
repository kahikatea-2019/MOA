const express = require('express')

const router = express.Router()

const { createUser } = require('../db/users')

// Register user route at /api/v1/auth/register
router.post('/register', register)

function register (req, res) {
  const { name, surname, role, email, password } = req.body
  createUser({ name, surname, role, password })
    .then(() => res.status(201).json({ ok: true }))
    .catch(({ message }) => {
      // note that message is used with SQLite, but if db is changed this may need to be updated
      if (message.includes('UNIQUE constraint failed: users.email')) {
        return res.status(400).json({
          ok: false,
          message: 'User already exists.'
        })
      }
      res.status(500).json({
        ok: false,
        message: "Something bad happened. We don't know why."
      })
    })

  // TODO: if not, hash the password and add the user to the database
}

module.exports = router
