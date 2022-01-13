const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userservices = require("../services/user.services");
const validationResult = require("express-validator").validationResult;
const User = require("../models/user");
exports.getLogin = (req, res, next) => {
    res.render("login", {
        title: "login"
    });
}

exports.getSignup = (req, res, next) => {
    res.render("signup", {
        title: "register"
    });
}

exports.login = (req, res, next) => {
     return User.forge({email: req.body.email}).fetch({require: true})
            .then((user) => {
                if (user) {
                    console.log("kjjjkk " + user);
    
                    return true;
                }
                console.log(user);
                
                res.json({user})
            }).catch((err) => {
                console.log(err);
                res.json({err})
            })

    if (validationResult(req)) {
        return res.json({err: validationResult(req).array()});
    } 
    return res.json({"true": true})
}

exports.signup = async (req, res, next) => {
    let {body} = req;
    let user = await userservices.find({email: body.email});
    
    if (user) 
        return res.render("signup", {
            title: "signup",
            authMessage: "email is not used before"
        });
    
    body.password = bcrypt.hashSync(body.password, 10);
    
    let newUser = await userservices.create({
        username: body.username,
        email: body.email,
        password: body.password
    });
    console.log(newUser);
    return;
    if (!user) 
        return res.redirect("index")
    
}