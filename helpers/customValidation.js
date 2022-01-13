const check = require("express-validator").check;
// const User = require('../models/user');
exports.passwordConfirmed = () => {
    return check("confirmPassword").custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Password confirmation does not match password');
        }
        return true;
    })
}
exports.unique =  (field, table) => {
    
    return check(field).custom((value, {req}) => {
        
        
        
    })
}