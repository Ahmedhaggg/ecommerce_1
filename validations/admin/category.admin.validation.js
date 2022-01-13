const check = require('express-validator').check;
const unique = require("../customValidation/uniqueField");

exports.validate = (method) => {
  switch (method) {
    case 'create': {
        return [
            check('name').not().isEmpty().withMessage("adminName can't be empty"),
            unique("name", "category")
        ];
    };
  }
}