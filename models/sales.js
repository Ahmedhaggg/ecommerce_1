const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Sales = db.define("sales", {
    productQuantity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
})

module.exports = Sales;