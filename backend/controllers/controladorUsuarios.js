const modeloUsuario  = require ('../models/Usuario');
const jwt = require('jsonwebtoken');
const express = require('express');

exports.updateUser = (request, response) =>{
    try{ 
        jwt.verify(request.token, 'secretkey', (err, authData) => {
            if(err){
                response.status(403).send({
                    code: 403,
                    message: 'error'
                });
            }else{
                const results = modeloUsuario.Usuario.update(request.body, {
                    where:
                { 
                    idUsuario: request.params.id 
                }
                });
                response.status(201).json({
                    status: 'User updated',
                    data: results,
                    authData
                });
            }
        });
            
        
    }catch(error){
        response.status(500).json({
            status: 'failed!',
            msg: error
        });
    }    

};
exports.deleteUser = (request, response) =>{
    try{ 
        jwt.verify(request.token, 'secretkey', (err, authData) => {
            const results = modeloUsuario.Usuario.destroy({
                where: 
                    {
                        idUsuario: request.params.id
                    }
            });
            response.json({
                status: 'User deleted id: '+ request.params.id,
                data: results,
                authData             
            });
            
        });

    }catch(error){
        response.status(500).json({
            status: 'failed!',
            msg: error
        });
    }  
};


exports.getUsers = async(request,response) =>{
    try {
        const results = await modeloUsuario.Usuario.findAll({attributes:['idUsuario','rol','correo']});
        
        jwt.verify(request.token, 'secretkey',() => {
            response.status(201).json(results); 
        });
    } catch (error) {
        response.status(500).json({
            status: 'failed',
            msg: error
        });
    }
};

// function searchForId(request, response){
//     try{
//         const findUser = modeloUsuario.Usuario.findOne(request.params.id,{
//             where: 
//             {
//                 idUsuario: request.params.id
//             }
//         });
        
//         response.status(201).json({
//             status: 'User finded', 
//             data: findUser
//         });    

//     }catch(error){
//         response.status(500).json({
//             status: 'failed',
//             msg: error
//         });
//     }
