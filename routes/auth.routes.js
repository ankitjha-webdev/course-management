module.exports = app => {
    const authController = require('../controllers/auth.controller');
    const router = require('express').Router();

    // User Registration Route
    router.post('/signup', authController.signup);

    router.post('/login', authController.login);

    app.use('/api/auth', router);

}