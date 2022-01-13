const check = require("express-validator").check;

const checkBodyData = () => {
    return check("newData").custom(async (value, {req}) => {
        if (!req.body) 
            throw new Error(`no any new Data in body`);
        return true;
    })
}

module.exports = checkBodyData;
