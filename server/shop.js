const client = require("./connection/conn")
const express = require('express');
const customerRoutes=require("./routers/customer_route")
const orderRoutes = require("./routers/order_route");
const productRoutes = require("./routers/product_route")
const cors = require("cors")
const app = express();
app.use(express.json());


app.use(cors())
app.use('/api', customerRoutes);
app.use('/api',productRoutes)
app.use('/api',orderRoutes);

client.connect();

app.listen(8080, ()=>{
    console.log("Sever is now listening at port 8080");
})

