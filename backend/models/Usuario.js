const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

exports.Usuario = sequelize.define('usuarios', {
    idUsuario: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
        autoIncrement: false,
    },
    rol: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
    },
    correo: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
    contraseña: {
        type: Sequelize.STRING,
        allowNull: false
    }
        
});

