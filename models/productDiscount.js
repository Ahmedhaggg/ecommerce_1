const { DataTypes } = require("sequelize");
const db = require("../config/database");

const ProductDiscount = db.define("products_discount", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    percent: {
        type: DataTypes.TINYINT,
        allowNull: true     
    },
    active: {
        type: DataTypes.BOOLEAN
    },
    description: {
        type: DataTypes.TEXT
    },
    expiresin: {
        type: DataTypes.DATE,
        allowNull: true
    }
})

module.exports = ProductDiscount;