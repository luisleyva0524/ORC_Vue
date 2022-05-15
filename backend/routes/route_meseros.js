const modelWaiters = require('../controllers/controladorMeseros');

const express = require('express');
const router = express.Router();

/*[=========== Waiters ===========]*/ 
router
    .get('/all',modelWaiters.getWaiters)
    .post('/add',modelWaiters.addWaiter)
    .put('/:id',modelWaiters.getWaiters)
    .delete('/:id',modelWaiters.deleteWaiter);
      
module.exports = router;