const {Sequelize, DataTypes} = require('sequelize');

// Create instance of sequalize
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'Sreelakshmi123@@',
    database: 'ecommerce'

});

const Login = sequelize.define('login', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name:{
        type: DataTypes.STRING(30),
        allowNull: false
    },

    phone:{
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true
    },

    password:{
        type: DataTypes.STRING(30),
        allowNull: false
    }

});

module.exports.Login = Login;