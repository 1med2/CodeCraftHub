const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => { // register a new user

    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, email, password: hashedPassword });
       
        await newUser.save(); // save the new user to the database

        res.status(201).json({ message: "User created successfully" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



