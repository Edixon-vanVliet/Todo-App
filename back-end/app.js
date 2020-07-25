var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

require("dotenv/config");

var app = express();

var user = require("./routes/User");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/account", user);

mongoose.connect(
    process.env.DB_Connection,
    // to avoid deprecation warnings as indicated at
    // https://mongoosejs.com/docs/deprecations.html
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    () => {
        console.log("Connected to DB!");
    }
);

module.exports = app;
