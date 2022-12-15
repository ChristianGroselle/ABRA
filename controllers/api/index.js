const router = require('express').Router();
const userRoutes = require('./user');
const recRoutes = require('./recipe');
//defining two seperate paths for api routes
router.use('/users', userRoutes);
router.use('/recipes', recRoutes);

module.exports = router;
