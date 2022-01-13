const Admin = require("../../models/admin");
const adminservice = require("../../services/admin/admin.services");
const validationResult = require("express-validator").validationResult;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.create = (req, res, next) => {
    let validationError = req.flash("validationErrors");
    res.render("admin/create_admin", {
        title: "create Amdin",
        validationError: validationError
    });
}

exports.store = async (req, res, next) => {
    let { adminName, email, password} = req.body;
    let hashedPassword = await bcrypt.hash(password, 12)
    await adminservice.create({adminName, email, password: hashedPassword});
    res.status(201).json({
        success: true,
        message: "create new admin successfully"
    });
}

exports.login = async (req, res, next) => {
    let { email, password } = req.body;
    let admin = await adminservice.find({email});
    if (!admin) {
        return res.status(401).json({
            success: false,
            message: "can't find admin with this email"
        });   
    }
    let adminHasedPassword = admin.password;
    let checkPassword = await bcrypt.compare(password, adminHasedPassword);
    if (checkPassword == false) {
        return res.status(401).json({
            success: false,
            message: 'password is wrong'
        })        
    }
    let token = jwt.sign(
        {
            admin_id: admin.id,
            role: "admin"
        }, 
        process.env.TOKEN_KEY,
        {
            expiresIn: "2d"
        }
    );
    res.status(200).json({
        success: true,
        token
    })
}