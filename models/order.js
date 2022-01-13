const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Order = db.define("orders", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    status: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    orderArrivalTime: {
        type: DataTypes.DATE,
        allowNull: false
    }
})

module.exports = Order;