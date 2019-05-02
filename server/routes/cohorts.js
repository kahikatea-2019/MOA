const express = require('express')

const db = require('../db/cohorts')

const router = express.Router()

router.get('/', (req, res) => {
  db.getCohorts()
    .then(cohorts => {
      res.render('index')
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
