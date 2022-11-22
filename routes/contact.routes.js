module.exports = app =>{
    const contactController = require('../controllers/contact.controller');
    const router = require('express').Router();
    
    // Create a new Contact route
    router.post('/', contactController.CreateContact);

    app.use('/api/contact', router);
}
