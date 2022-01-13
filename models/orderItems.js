const { DataTypes } = require("sequelize");
const db = require("../config/database");

const OrderItems = db.define("order_items", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    quantity: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
})

module.exports = OrderItems;