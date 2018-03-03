const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
// const development = require('../db/knexfile').development

const db = require('../db/db.js')

module.exports = router

router.use(bodyParser.json())

router.get('/', (req, res) => {
  // const interests = req.match.params.interest
  db.getType('Gaming')
    .then((type) => {
      res.send({type})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
