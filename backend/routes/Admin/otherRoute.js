const express = require('express')
const router = express.Router()
const otherController = require('../../controllers/Admin/otherController')
const verifyRefreshToken = require('../../middleware/Admin/VerifyRefreshToken')

router.use(verifyRefreshToken)

router.route('/home')
    .get(otherController.adminHomeController)

router.route('/salon')
    .get(otherController.adminSalonController)

router.route('/salon/createsalon')
    .post(otherController.createSalon)

router.route('/salon/salonlist')
    .get(otherController.salonList)

router.route('/salon/updatesalon')
    .put(otherController.updateSalon)

router.route('/salon/deletesalon')
    .delete(otherController.deleteSalon)

module.exports = router