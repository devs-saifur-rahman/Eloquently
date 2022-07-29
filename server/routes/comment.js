const {Router} = require('express');
const { createComment, fetchAllComment, fetchSingleComment, updateComment, deleteComment, deleteAllComment } = require('../controllers/Comment');

const router = Router();

//api - dummy
router.get('/', fetchAllComment);
router.get('/:id', fetchSingleComment);

router.post('/', createComment);
router.patch('/:id', updateComment);

router.delete('/:id', deleteComment);
router.delete('/', deleteAllComment);

module.exports = router;