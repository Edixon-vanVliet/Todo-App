const { body } = require("express-validator");

exports.validateCreateUserFields = [
    body("firstName")
        .not()
        .isEmpty()
        .withMessage("Must specify first name.")
        .isAscii()
        .withMessage("Invalid characters")
        .trim(),
    body("lastName")
        .not()
        .isEmpty()
        .withMessage("Must specify last name.")
        .isAscii()
        .withMessage("Invalid characters")
        .trim(),
    body("userName")
        .not()
        .isEmpty()
        .withMessage("Must specify username.")
        .isAscii()
        .withMessage("Invalid characters")
        .isLength({ min: 6 })
        .withMessage("Username should have minimum 6 characters.")
        .trim(),
    body("email")
        .not()
        .isEmpty()
        .withMessage("Must specify email.")
        .isLength({ min: 6, max: 255 })
        .withMessage("Email should have between 6 and 255 characters.")
        .isEmail()
        .withMessage("Invalid email.")
        .normalizeEmail(),
    body("password")
        .not()
        .isEmpty()
        .withMessage("Must specify password.")
        .isAscii()
        .withMessage("Invalid characters")
        .isLength({ min: 8, max: 25 })
        .withMessage("Password should have between 6 and 25 characters."),
];
