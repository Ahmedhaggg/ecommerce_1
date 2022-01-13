const router = require("express").Router();
const categoryController = require("../../Controllers/admin/category.admin.controller");
const categoryValidation = require("../../validations/admin/category.admin.validation")
const { use } = require("../../middleware/errorHandler");
router.get(
    "/",
    use(categoryController.index)
);
router.post(
    "/",
    categoryValidation.validate("create"),
    use(categoryController.store)
);
router.get(
    "/:id",
    use(categoryController.show)
);
router.get(
    "/:id/edit",
    use(categoryController.edit)
);
router.put(
    "/:id",
    use(categoryController.update)
);
router.delete(
    "/:id",
    use(categoryController.delete)
)
module.exports = router;