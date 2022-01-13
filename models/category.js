const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Category = db.define("categories", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    }, 
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Category;