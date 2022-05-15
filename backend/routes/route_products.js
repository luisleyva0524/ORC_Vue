const modelProduct = require('../controllers/controladorProductos');

const express = require('express');
const router = express.Router();

/*[=========== PRODUCTS ===========]*/ 
router
    .get('/all',modelProduct.getProducts)
    .post('/add',modelProduct.addProduct);
router
    .route('/:id')  
    .put(modelProduct.updateProduct)
    .delete(modelProduct.deleteProduct);
      

module.exports = router;