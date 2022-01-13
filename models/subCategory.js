const { DataTypes } = require("sequelize");
const db = require("../config/database");

const subcategory = db.define("sub_categories", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = subcategory;