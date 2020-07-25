const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");

module.exports = (validations) => {
    return async (req, res, next) => {
        await Promise.all(validations.map((validation) => validation.run(req)));

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        if (req.file) {
            const root = process.cwd();
            const imagePath = req.file.path;

            fs.unlinkSync(path.join(root, imagePath));
        }

        res.status(422).json({ errors: errors.array() });
    };
};
