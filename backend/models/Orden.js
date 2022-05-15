const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

exports.Orden = sequelize.define('ordenes', {
    idOrden: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
        autoIncrement: false
    },
    cliente: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mesero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    fecha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    hora: {
        type: Sequelize.STRING,
        allowNull: false
    },
    total: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false
    }

});
