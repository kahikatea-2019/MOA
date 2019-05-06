const express = require('express')
const router = express.Router()
const db = require('../db/status')

router.get('/students/:id', (req, res) => {
  const id = req.params.id
  db.getUserStatus(id)
    .then(statuses => {
      res.send(statuses)
    })
    .catch(err => res.status(500).send(err.message))
})

module.exports = router
