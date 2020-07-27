const { body } = require("express-validator");
const User = require("../../models/User.model");
const { compare } = require("bcryptjs");

const authenticateUser = async (value, { req }) => {
    const { userName } = req.body;

    const user = await User.findOne({ userName });
    if (!user) {
        return Promise.reject("Incorrect credentials");
    }

    const validPassword = await compare(value, user.password);
    if (!validPassword) {
        return Promise.reject("Incorrect credentials");
    }
};

exports.validateLoginUserFields = [
    body("userName")
        .not()
        .isEmpty()
        .withMessage("Must specify username.")
        .isAscii()
        .withMessage("Invalid characters")
        .isLength({ min: 6 })
        .withMessage("Username should have minimum 6 characters.")
        .trim(),
    body("password")
        .not()
        .isEmpty()
        .withMessage("Must specify password.")
        .isAscii()
        .withMessage("Invalid characters")
        .isLength({ min: 8, max: 25 })
        .withMessage("Password should have between 8 and 25 characters.")
        .custom(authenticateUser),
];
