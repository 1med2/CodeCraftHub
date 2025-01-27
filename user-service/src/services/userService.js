const User = require('../models/userModel');

exports.createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

exports.getUsers = async () => {
    return await User.find();
};