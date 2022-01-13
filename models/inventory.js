const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Inventory = db.define("products_inventory", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    quantity: {
        type: DataTypes.INTEGER
    }
})

module.exports = Inventory;