const db = require('../models');
const Contact = db.contant;

// Create and Save a new Contact

exports.CreateContact = async (req, res) => {

    try {
        const contact = {
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        }
        
        const data = await Contact.create(contact);

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};