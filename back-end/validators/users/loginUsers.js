const { body } = require("express-validator");

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
        .withMessage("Password should have between 6 and 25 characters."),
];
