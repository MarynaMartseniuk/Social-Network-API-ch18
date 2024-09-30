const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
} = require('../../controllers/studentController');

router.route('/').get(getUsers).post(createUser);

router.route('/:studentId').get(getSingleUser);

module.exports = router;