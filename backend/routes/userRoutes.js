const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userControllers');
const { auth, restrict } = require('../middleware/verifyToken');


router.route('/')
    .get(auth, restrict(["admin"]),usersController.getAllUsers)


router.route('/:id')
    .put(auth, restrict(["patient"]),usersController.updateUser)
    .delete(auth, restrict(["patient"]),usersController.deleteUser)

router.route('/getuser/:id')
    .get(auth, restrict(["patient"]), usersController.getUser)

module.exports = router;