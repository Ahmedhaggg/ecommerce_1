const check = require("express-validator").check;
const adminService = require("../../services/admin/admin.services")
const categoryServices = require("../../services/admin/category.services");
const productService = require("../../services/admin/product.services");

const factoryValidationField = table => {
    switch (table) {
        case "admin" :
            return adminService;
        case "category":
            return categoryServices;
        case "product": 
            return productService;
    };
}


const unique =  (field, table) => 
    check(field).custom(async (value, {req}) => {
        let query = {};
        query[field] = req.body[field];
        let row = await factoryValidationField(table).read(query, ["id"]);
        if (row) 
            throw new Error(`${field} is used before`);
        return true;
    })


module.exports = unique;