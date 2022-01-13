const router = require("express").Router();
const authAdminController = require("../../Controllers/admin/auth.admin.controller");
const { use } = require("../../middleware/errorHandler") 
const authAdminValidation = require("../../validations/admin/auth.admin.validation")
const checkValidationResult = require("../../middleware/checkValidationResult")


router.post(
    "/",
    authAdminValidation.validate("create"),
    checkValidationResult,
    use(authAdminController.store)
)

router.post(
    "/login",
    authAdminValidation.validate("login"),
    checkValidationResult,
    use(authAdminController.login)
);


module.exports = router;