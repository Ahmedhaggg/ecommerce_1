const { Sequelize } = require("sequelize");
const db = new Sequelize("store", "root", "", {
    host: "localhost",
    dialect: "mysql"
});


module.exports = db;