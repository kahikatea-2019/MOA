const express = require('express')

const router = express.Router()

router.get('/assessments', (req, res) => {
  res.send('Show me all the assessments please')
})

module.exports = router
