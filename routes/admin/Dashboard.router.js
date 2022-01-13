const router = require("express").Router();
const use = require("../../middleware/errorHandler");
const DashboardController = require("../../Controllers/admin/Dashboard.controller");
const guard = require("../../middleware/guard");

router.get(
    "/",
    guard.isAdmin,
    DashboardController.index
)

module.exports = router;