const check = require('express-validator').check;
const unique = require("../customValidation/uniqueField");

exports.validate = (method) => {
    switch (method) {
        case 'create': {
            return [ 
                check('name').not().isEmpty(),
                check('price').not().isEmpty(),
                check('description').not().isEmpty(),
                check('categoryId').not().isEmpty(),
                unique("name", "product")
            ];   
        }
        case "login": {
            return [
                check("email").not().isEmpty(), 
                check("email").isEmail(),
                check("password").not().isEmpty() 
            ];
        }
    }
}