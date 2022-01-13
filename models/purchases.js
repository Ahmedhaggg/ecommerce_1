const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Purchases = db.define("purchases", {
   
    totalPrice:  {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    orderTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    PurchaseCompletionTime: {
        type: DataTypes.DATE,
        allowNull: false
    }

});

module.exports = Purchases;