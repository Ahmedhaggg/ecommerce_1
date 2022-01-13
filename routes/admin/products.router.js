const router = require("express").Router();
const {use} = require("../../middleware/errorHandler");
const adminProductsController = require("../../Controllers/admin/products.admin.controller");
const guard = require("../../middleware/guard");
const { singleUploader } = require("../../helpers/helper");
const productValidation = require("../../validations/admin/products.admin.validation");
const checkValidationResult = require("../../middleware/checkValidationResult");

router.get(
    "/",
    guard.isAdmin,
    use(adminProductsController.index)
);

router.get(
    "/create",
    guard.isAdmin,
    use(adminProductsController.create)
);

router.post(
    "/",
    guard.isAdmin,
    singleUploader("product_image"),
    productValidation.validate("create"),
    checkValidationResult,
    use(adminProductsController.store)
);

router.get(
    "/:id",
    guard.isAdmin,
    use(adminProductsController.show)
);

router.get(
    "/:id/edit",
    guard.isAdmin,
    use(adminProductsController.edit)
);
router.put(
    "/:id",
    guard.isAdmin,
    use(adminProductsController.update)
);
router.delete(
    "/:id",
    guard.isAdmin,
    use(adminProductsController.delete)
);

module.exports = router;