const express = require('express');
const router = express.Router();
const doctorsController = require('../controllers/doctorControllers');
const { auth, restrict } = require('../middleware/verifyToken');

router.route('/')
    .get(auth, restrict(["admin"]),doctorsController.getAllDoctors)


router.route('/:id')
    .put(auth, restrict(["doctor"]),doctorsController.updateDoctor)
    .delete(auth, restrict(["doctor"]),doctorsController.deleteDoctor)

router.route('/getdoctor/:id')
    .get(auth, restrict(["doctor"]),doctorsController.getDoctor)

module.exports = router;