const { DataTypes } = require("sequelize");
const db = require("../config/database");

const paymentDetails = db.define("payment_details", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    paymentType: {
        type: DataTypes.STRING("10"),
        allowNull: false
    }, 
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: true
    }
})

module.exports = paymentDetails;