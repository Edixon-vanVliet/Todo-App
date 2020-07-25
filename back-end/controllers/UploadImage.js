var multer = require("multer");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/images/");
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}.${file.mimetype.split("/")[1]}`);
    },
});

module.exports = multer({ storage });
