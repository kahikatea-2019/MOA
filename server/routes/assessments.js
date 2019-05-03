const express = require('express')
const router = express.Router()

const db = require('../db/assessments')

router.get('/', (req, res) => {
  res.send('Show me some good assessments')
  db.getAssessments()
    .then(assessments => {
      res.send(assessments)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
