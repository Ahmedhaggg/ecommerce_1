const { DataTypes } = require("sequelize");
const db = require("../config/database");

const UserAddress = db.define("user_address", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    country: {
        type: DataTypes.STRING(20),
        allowNull: false
    }, 
    city: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    area1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    area2: {
        type: DataTypes.STRING
    }
})

module.exports = UserAddress;