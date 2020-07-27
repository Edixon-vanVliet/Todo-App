const Router = require("express").Router();

const upload = require("../controllers/UploadImage");
const validation = require("../validators");
const { validateCreateUserFields } = require("../validators/users/createUsers");
const { validateLoginUserFields } = require("../validators/users/loginUsers");
const { addUser, getUser } = require("../controllers/User");

Router.post(
    "/register",
    upload.single("photo"),
    validation(validateCreateUserFields),
    addUser
);

Router.post("/login", validation(validateLoginUserFields), getUser);

module.exports = Router;
