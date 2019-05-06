const express = require('express')
const db = require('../db/cohorts')
const router = express.Router()

router.get('/', (req, res) => {
  db.getCohorts()
    .then(cohorts => {
      res.send(cohorts)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getCohort(id)
    .then(cohort => res.send(cohort))
    .catch(err => res.status(500).send(err.message))
})

module.exports = router
