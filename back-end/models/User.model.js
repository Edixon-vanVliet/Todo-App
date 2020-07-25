const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        userName: {
            type: String,
            required: true,
            minlength: 6,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            maxlength: 255,
            minlength: 6,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
        },
        photo: String,
    },
    { timestamps: true }
);

module.exports = mongoose.model("Users", UserSchema);
