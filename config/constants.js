const { dirname } = require("path")

let getRoot = () => dirname(__dirname);
let uploadsRoot = () => dirname(__dirname) + "\\uploads\\";

module.exports = {getRoot, uploadsRoot};