const { DataTypes } = require("sequelize");
const db = require("../config/database");

const PurchasesItems = db.define("purchases_items", {
   
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    quantity: {
        type: DataTypes.TINYINT,
        allowNull: false
    }
});

module.exports = PurchasesItems;