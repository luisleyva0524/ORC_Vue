const express = require('express');
const cors = require('cors');
const routeProducts = require('./routes/route_products');
const routeUsers = require('./routes/route_users');
const routeOrders = require('./routes/route_orders');
const routeWaiters = require('./routes/route_meseros');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/orc/v1/products', routeProducts);
app.use('/orc/v1/users', routeUsers);
app.use('/orc/v1/orders', routeOrders);
app.use('/orc/v1/waiters', routeWaiters);


app.listen(3000, () => {
    console.log('server running in port 3000');
});





