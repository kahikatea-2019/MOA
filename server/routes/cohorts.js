const express = require('express')
const router = express.Router()
const db = require('../db/cohorts.js')

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getCohort(id)
    .then(cohort => res.send('cohorts', cohort))
    .catch(err => res.status(500).send(err.message))
})

module.exports = router
