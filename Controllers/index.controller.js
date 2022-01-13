let Users = require('../models/user');
let Tests = require("../models/admin");
exports.index = async (req, res, next) => {

    let newUser = await Users.forge({
        username: "ahmed", 
        email: "ahmedhaggag@gmail.com",
        password: "Ahmed@12345",
        birthday: new Date(),
        gender: "male",
        image: "image",
        phone: "01014223925"
    }).save();
    
    
}