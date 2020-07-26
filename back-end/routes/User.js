const Router = require("express").Router();

const upload = require("../controllers/UploadImage");
const validation = require("../validators");
const { validateCreateUserFields } = require("../validators/users/createUsers");
const { addUser } = require("../controllers/User");

Router.post(
    "/register",
    upload.single("photo"),
    validation(validateCreateUserFields),
    addUser
);

module.exports = Router;
