const modeloMesero = require('../models/Mesero');

exports.addWaiter = async(request, response) => {
    try{
        const results = await modeloMesero.Mesero.create(request.body);
        response.status(201).json(results);
    }catch(error){
        response.status(500).json({
            status: 'failed',
            msg: error
        });   
    }
};

exports.updateWaiter = async(request, response) =>{
    try{
        const results = await modeloMesero.Mesero.update(request.body,{
            where:
        { 
            idMesero : request.params.id 
        }
        });
        response.status(201).json({
            status: 'waiter update',
            data: results
        });
    }catch(error){
        response.status(201).json({
            status: 'failed!',
            msg: error
        });
    }  
};

exports.deleteWaiter = async(request, response) =>{
    try{ 
        const results = await modeloMesero.Mesero.destroy({
            where: {
                idMesero: request.params.id
            }
        });
        response.status(201).json({
            status: 'waiter deleted id:' + request.params.id,
            data: results
        });
    }catch(error){
        response.status(500).json({
            status: 'failed!',
            msg: error
        });
    }  

};

exports.getWaiters = async(resquest, response) =>{
    try{  
        const results  = await modeloMesero.Mesero.findAll();
        response.status(201).json(results);
    }catch(error){
        response.status(500).json({
            status: 'failed',
            msg: error
        });
    }  
};