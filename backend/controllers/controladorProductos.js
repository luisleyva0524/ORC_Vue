const modeloProducto  = require ('../models/Producto');


/* 
    [==============> PRODUCTS <==============]
*/
exports.addProduct = async(request, response) => { 
    try{ 
        const results = await modeloProducto.Producto.create(request.body);
        response.status(201).json({
            status: 'Product add',
            data: results    
        });
    }catch(error){
        response.status(500).json({
            status: 'failed!',
            msg: error
        });
    }  
};

exports.updateProduct = async(request, response) =>{
    try{ 
        const results = await modeloProducto.Producto.update(request.body, {
            where:
                { 
                    idProducto: request.params.id 
                }
        });
        response.status(201).json({
            status: 'Product updated',
            data: results 
        });
    }catch(error){
        response.status(500).json({
            status: 'failed!',
            msg: error
        });
    }    
};

exports.deleteProduct = async(request, response) =>{
    try{ 
        const results = await modeloProducto.Producto.destroy({
            where: {
                idProducto: request.params.id
            }
        });
        response.status(201).json({
            status: 'product deleted id:'+ request.params.id,
            data: results
        });
    }catch(error){
        response.status(500).json({
            status: 'failed!',
            msg: error
        });
    }  
};


exports.getProducts = async(request,response) =>{
    try {
        const results = await modeloProducto.Producto.findAll();
        response.status(201).json(results);
    } catch (error) {
        response.status(500).json({
            status: 'failed',
            msg: error
        });
    }
};


