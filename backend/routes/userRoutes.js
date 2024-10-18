const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userControllers');
const { auth, restrict } = require('../middleware/verifyToken');


router.route('/')
    .get(auth, restrict(["admin"]),usersController.getAllUsers)

router.route('/profile/me')
    .get(auth, restrict(["patient"]),usersController.getUserProfile)

router.route('/appointments/:id')
    .get(usersController.getAppointments)

router.route('/appointments/:id')
    .delete(usersController.deleteAppointment);

router.route('/:id')
    .put(auth, restrict(["patient"]),usersController.updateUser)
    .delete(auth, restrict(["patient"]),usersController.deleteUser)

router.route('/getuser/:id')
    .get(auth, restrict(["patient"]), usersController.getUser)

module.exports = router;