const router = require('express').Router()
const { tesData, tesDataFailed } = require('../controllers/tesController')

router.get('/testData/:id', tesData)
router.get('/testDataFailed', tesDataFailed)

module.exports = router