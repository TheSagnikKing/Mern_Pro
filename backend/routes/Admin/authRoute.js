const express = require('express')
const router = express.Router()
const authController = require('../../controllers/Admin/authController')

router.route('/signup')
    .post(authController.registerAdmin)

router.route('/signin')
    .post(authController.adminLogin)

router.route('/update')
    .patch(authController.updateAdmin)

router.route('/refresh')
    .get(authController.adminRefresh)

router.route('/logout')
    .post(authController.adminLogout)

router.route('/adminloggedin')
    .get(authController.AdminLoggedIn)

module.exports = router