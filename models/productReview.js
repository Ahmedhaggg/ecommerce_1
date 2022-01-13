const { DataTypes } = require("sequelize");
const db = require("../config/database");

const ProductsReviews = db.define("products_review", {
   
    rate: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false
    }

});

module.exports = ProductsReviews;