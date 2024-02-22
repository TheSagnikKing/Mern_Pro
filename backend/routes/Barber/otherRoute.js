const express = require('express')
const router = express.Router()
const otherController = require('../../controllers/Barber/otherController')
const verifyRefreshToken = require('../../middleware/Barber/VerifyRefreshToken')

router.use(verifyRefreshToken)

router.route('/home')
    .get(otherController.barberHomeController)

router.route('/salon')
    .get(otherController.barberSalonController)

module.exports = router