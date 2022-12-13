const router = require('express').Router();
const userRoutes = require('./user');
const recRoutes = require('./recipe');
//defining two seperate paths for api routes
router.use('/user', userRoutes);
router.use('/recipe', recRoutes);

module.exports = router;
