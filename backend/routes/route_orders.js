const modelOrders = require('../controllers/controladorOrdenes');

const express = require('express');
const router = express.Router();

/*[=========== ORDERS ===========]*/
router
    .get('/all', modelOrders.getOrders)
    .post('/add', modelOrders.addOrder)
    .put('/:id', modelOrders.updateOrder)
    .delete('/:id', modelOrders.deleteOrder);


module.exports = router;