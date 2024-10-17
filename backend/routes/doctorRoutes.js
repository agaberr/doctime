const express = require('express');
const router = express.Router();
const doctorsController = require('../controllers/doctorControllers');
const { auth, restrict } = require('../middleware/verifyToken');

router.route('/')
    .get(doctorsController.getAllDoctors)


router.route('/:id')
    .put(auth, restrict(["doctor"]),doctorsController.updateDoctor)
    .delete(auth, restrict(["doctor"]),doctorsController.deleteDoctor)

router.route('/getdoctor/:id')
    .get(auth, restrict(["doctor"]),doctorsController.getDoctor)

router.route('/profile/me')
    .get(auth, restrict(["doctor"]),doctorsController.getDoctorProfile)

router.route('/book-appointment')
    .post(doctorsController.bookAppointment)

module.exports = router;