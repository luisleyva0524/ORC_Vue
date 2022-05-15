const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

exports.Producto = sequelize.define('productos', {
    // attributes
    idProducto: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
        autoIncrement: false
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false
    },
    precio: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
});

