const router = require('express').Router();
const userController = require("../Controllers/auth.controller");
const authValidate = require("../validations/auth.validation");
router.get('/login', userController.getLogin);
router.get('/signup', userController.getSignup);
router.post('/login', userController.login);
router.post('/signup', userController.signup);

module.exports = router;