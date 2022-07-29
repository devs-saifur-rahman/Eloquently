const { Router } = require('express');

const authRoute = require('./auth');
const articleRoute = require('./article');
const userRoute = require('./user');
const commentRoute = require('./comment');

const router = Router();

router.use('/auth', authRoute);
router.use('/article', articleRoute);
router.use('/user', userRoute);
router.use('/comment', commentRoute);



module.exports = router;