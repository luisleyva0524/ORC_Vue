const modeloUsuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');
// const expressJWT = require('express-jwt');
const bcrypt = require('bcrypt');

// const signToken = idUsuario => jwt.sign({ idUsuario }, 'secretkey');

exports.signIn = async (request, response) => {
    const { body } = request;
    try {
        const findUser = await modeloUsuario.Usuario.findOne({
            where: {
                correo: body.correo
            }
        });
        if(!findUser) {
            response.status(403).send('usuario o contraseña invalida');
        } else {
            const match = await bcrypt.compare(body.contraseña, findUser.contraseña);
            // const signed = signToken(findUser.idUsuario);
            // const storange = localStorage.setItem('jwt', signed);
            if(match){
                response.status(200).send(findUser);
            } else {
                response.status(403).send('usuario o contraseña invalida');
            }
        }
    } catch (error) {
        response.send(error.message);
    }
};

exports.signUp = async (request, response) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashed = await bcrypt.hash(request.body.contraseña, salt);
        const results = await modeloUsuario.Usuario.create({
            idUsuario: request.body.idUsuario,
            correo: request.body.correo,
            rol: request.body.rol,
            contraseña: hashed, salt
        });
        // const signed = signToken(results.idUsuario);
        response.status(201).send(results);
    } catch (error) {
        response.status(500).json({
            status: 'failed to try create user',
            error: error.message
        });
    }

};







// exports.signUp = async (request, response) => {
//     try {
//         const salt = await bcrypt.genSalt();
//         const hashed = await bcrypt.hash(request.body.contraseña, salt);
//         const results = await modeloUsuario.Usuario.create({
//             idUsuario: request.body.idUsuario,
//             correo: request.body.correo,
//             rol: request.body.rol,
//             contraseña: hashed, salt
//         });
//         const signed = signToken(results.idUsuario);
//         response.status(201).send(signed);
//     } catch (error) {
//         response.status(500).json({
//             status: 'failed to try create user',
//             error: error.message
//         });
//     }

// };