const express = require('express')
const router = express.Router()
const db = require('../db/assessments.js')

router.post('/:id', (req, res) => {
  console.log(JSON.stringify({ notice: 'Evidence has been updated' }))
  db.submitAssessment(req.body)
    .then(assessment => res.send('student_assessments', assessment))
    .catch(err => res.status(500).send(err.message))
})

module.exports = router

