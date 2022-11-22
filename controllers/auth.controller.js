const db = require('../models');
const User = db.user;
const bcrypt = require('bcryptjs');

// Register a new user
exports.signup = async (req, res) => {
    // Save User to Database
    console.log("Processing func -> SignUp");

    // const password = await bcrypt.hash(req.body.password, 10);
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }


    try {
        const IsUser = await User.findOne({
            where: {
                username: req.body.username,
                email: req.body.email
            }
        });

        if (IsUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        await User.create(user);
        res.status(200).json({ message: "User registered successfully" });
        // res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }

};

//  Login user 
exports.login = async (req, res) => {
    console.log("Processing func -> Login");

    try {
        const user = await User.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            },
            attributes: ['id', 'username', 'email', 'password']
        });

        if (!user) {
            return res.status(404).json({ message: "User Not found." });
        }

        res.status(200).json({ message: "User logged in successfully", user });
    } catch (error) {
        res.status(500).json(error);
    }

};