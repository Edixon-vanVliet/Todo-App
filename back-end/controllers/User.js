const User = require("../models/User.model");
const { genSalt, hash } = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

exports.getUser = async (req, res, next) => {
    const { userName } = req.body;

    try {
        const user = await User.findOne({ userName });
        const token = jwt.sign({ _id: user._id }, process.env.Token_Secret);

        res.status(200).header("auth-token", token).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};
