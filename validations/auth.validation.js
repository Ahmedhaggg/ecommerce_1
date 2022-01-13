const check = require('express-validator').check;
const customValidation = require("../helpers/customValidation");
exports.validate = (method) => {
  switch (method) {
    case 'signup': {
     return [ 
        body('userName', "username can't be empty").exists(),
        body('email', 'Invalid email').exists().isEmail(),
        body('phone', "phone can't be empty").exists(),
        body('status').optional().isIn(['enabled', 'disabled'])
       ]   
    }
    case "login": {
        return [
            check("email").not().isEmpty(), 
            customValidation.unique("email", "users")
        ];
    }
  }
}