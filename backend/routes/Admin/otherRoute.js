const express = require('express')
const router = express.Router()
const otherController = require('../../controllers/Admin/otherController')
const verifyRefreshToken = require('../../middleware/Admin/VerifyRefreshToken')

router.use(verifyRefreshToken)

router.route('/home')
    .get(otherController.adminHomeController)

router.route('/salon')
    .get(otherController.adminSalonController)


module.exports = router