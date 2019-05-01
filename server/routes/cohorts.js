const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/cohorts', (req, res) => {
  db.getCohorts()
    .then(cohorts => {
      res.render('index', { cohorts: cohorts })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
