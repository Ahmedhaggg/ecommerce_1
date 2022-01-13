const validationResult = require('express-validator').validationResult;
const fs = require("fs");
const { uploadsRoot } = require("../config/constants");

const checkValidationResult = async (req, res, next) => {
    if (validationResult(req).array().length == 0) {
        return next();
    }
    let validationError = validationResult(req).array()
    if (req.file) {
        let imageRoot = uploadsRoot() + req.file.filename;
        fs.unlinkSync(imageRoot);
    }
    res.status(400).json({validationError})
}

module.exports = checkValidationResult;