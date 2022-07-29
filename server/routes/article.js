const { Router } = require('express');
const { createArticle, fetchAllArticle, fetchSingleArticle, updateArticle, deleteArticle, deleteAllArticle } = require('../controllers/article');

const router = Router();

//api
router.get('/', fetchAllArticle);
router.get('/:id', fetchSingleArticle);

router.post('/', createArticle);
router.patch('/:id', updateArticle);

router.delete('/:id', deleteArticle);
router.delete('/', deleteAllArticle);


module.exports = router;