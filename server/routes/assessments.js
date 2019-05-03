const express = require('express')
const router = express.Router()
const db = require('../db/assessments.js')

router.put('/:id', (req, res) => {
  const id = req.params.id

  const submission = {
    studentId: id,
    date: new Date(),
    evidence: req.body.evidence
  }

  db.submitAssessment(submission)
    .then(() => res.json({ notice: 'Evidence has been updated!' }))
    .catch(err => res.status(500).send(err.message))
})

module.exports = router
