const express = require('express')
const router = express.Router()
const authController = require('../../controllers/Barber/authController')

// Akhane akta jinish hote pare seta holo je user logout koreni but cholejache onno page then okhane unauthorizer jaigai forbidden dekhabe

router.route('/googlesignup')
    .post(authController.googleBarberRegister)

router.route('/signup')
    .post(authController.registerBarber)

router.route('/googlesignin')
    .post(authController.googleBarberLogin)


router.route('/signin')
    .post(authController.barberLogin)


router.route('/update')
    .patch(authController.updateBarber)

router.route('/refresh')
    .get(authController.barberRefresh)

router.route('/logout')
    .post(authController.barberLogout)

router.route('/barberloggedin')
    .get(authController.BarberLoggedIn)

module.exports = router