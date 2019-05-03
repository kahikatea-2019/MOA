const express = require('express')
const router = express.Router()

const db = require('../db/assessments')

// GET route to run getAssessments db function else send error message
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
