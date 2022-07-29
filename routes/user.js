const {Router} = require('express');
const { createUser, fetchAllUser, fetchSingleUser, updateUser, deleteUser, deleteAllUser } = require('../controllers/User');

const router = Router();

//api
router.get('/', fetchAllUser);
router.get('/:id', fetchSingleUser);

router.post('/', createUser);
router.patch('/:id', updateUser);

router.delete('/:id', deleteUser);
router.delete('/', deleteAllUser);

module.exports = router;