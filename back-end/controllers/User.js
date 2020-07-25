const User = require("../models/User.model");
const { genSalt, hash } = require("bcryptjs");

exports.addUser = async (req, res, next) => {
    const { firstName, lastName, userName, email, password } = req.body;
    const photo = req.file.path;

    const salt = await genSalt(10);
    const hashPassword = await hash(password, salt);

    try {
        const user = await new User({
            firstName,
            lastName,
            userName,
            email,
            password: hashPassword,
            photo,
        }).save();

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};
