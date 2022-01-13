const check = require('express-validator').check;
const unique = require("../customValidation/uniqueField");

exports.validate = (method) => {
  switch (method) {
    case 'create': {
        return [ 
            check('adminName').not().isEmpty().withMessage("adminName can't be empty"),
            check('email').not().isEmpty().withMessage("email can't be empty"),
            check('email').isEmail().withMessage("can't be email"),
            check('password').not().isEmpty().withMessage("adminName can't be empty"),
            unique("adminName", "admin")
        ];   
    };
    case "login": {
        return [
            check("email").not().isEmpty().withMessage("adminName can't be empty"), 
            check("email").isEmail().withMessage("can't be email"),
            check("password").not().isEmpty().withMessage("adminName can't be empty") 
        ];
    }
  }
}