const express = require('express');
const router = express.Router();
const doctorsController = require('../controllers/doctorControllers');
// const authdoctor = require('../middleware/authdoctor');

router.route('/')
    .get(doctorsController.getAllDoctors)


router.route('/:id')
    .put(doctorsController.updateDoctor)
    .delete(doctorsController.deleteDoctor)

router.route('/getdoctor/:id')
    .get(doctorsController.getDoctor)

module.exports = router;