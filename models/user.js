const { DataTypes } = require("sequelize");
const db = require("../config/database");

let User = db.define("users", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false, 
        unique: true
    },
    password: {
        type: DataTypes.STRING(120),
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING(6),
        allowNull: false
    },
    image: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
    lastLogin: {
        type: DataTypes.DATE,
        allowNull: true
    }
})


module.exports = User;

// const mongoose = require('mongoose');

// const userSchema = mongoose.Schema({
//     username : {
//         type: String,
//         required: true,
//         min: 10
//     }, 
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// })

// const User = mongoose.model("users", userSchema);

// module.exports = User;