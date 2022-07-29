const { Router } = require('express');

const authRoute = require('./auth');

const router = Router();

router.use('/auth',authRoute);

module.exports = router;