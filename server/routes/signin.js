const express = require('express')
const router = express.Router()
const db = require('../db/signin.js')

router.post('/', async (req, res) => {
  const postSignin = req.body
  try {
    const signin = await db.updateSignin(postSignin)
    res.json({ signin })
  } catch (err) {
    res.status(500).send(err.message)
  }
})
module.exports = router
