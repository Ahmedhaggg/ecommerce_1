const router = require('express').Router();
const indexController = require("../Controllers/index.controller");
router.get("/", indexController.index)

module.exports = router;