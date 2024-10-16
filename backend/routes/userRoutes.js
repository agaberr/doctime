const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userControllers');
// const authUser = require('../middleware/authUser');

router.route('/')
    .get(usersController.getAllUsers)


router.route('/:id')
    .put(usersController.updateUser)
    .delete(usersController.deleteUser)

router.route('/getuser/:id')
    .get(usersController.getUser)

module.exports = router;