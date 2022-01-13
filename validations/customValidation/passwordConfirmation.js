const check = require("express-validator").check;

const passwordIsConfirmed = () => {
    return check("confirmPassword").custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Password confirmation does not match password');
        }
        return true;
    })
}

module.exports = passwordIsConfirmed;