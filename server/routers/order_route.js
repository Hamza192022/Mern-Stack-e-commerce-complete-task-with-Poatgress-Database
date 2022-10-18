const client = require("../connection/conn")
const express = require('express');
const routers = new express.Router()
const body_paser=require("body-parser")
const app = express();

app.use(body_paser.json());


// <============================get all users==================>
routers.get('/orders', (req, res)=>{
    client.query(`Select * from orders`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
// client.connect();


// <============================get single users==================>
routers.get('/orders/:orders_id', (req, res)=>{
    client.query(`Select * from orders where orders_id=${req.params.orders_id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

// <============================create user==================>
routers.post('/orders', (req, res)=> {
    const user = req.body;
    let insertQuery = `INSERT INTO orders(orders_id, cust_id, product_id, orders_descrip,orders_totalprice,orders_reviews) 
                       VALUES(${user.orders_id}, '${user.cust_id}', '${user.product_id}', '${user.orders_descrip}','${user.orders_totalprice}','${user.orders_reviews}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('New Customer insert successful')
        }
        else{
            res.send("customer and product does not exist") 
            console.log("ERROR",err.message) 
        }
    })
    client.end;
})

// <============================UPDATE USER==================>

routers.put('/orders/:orders_id', (req, res)=> {
    let user = req.body;
    let updateQuery = `update orders
                       set cust_id = '${user.cust_id}',
                       product_id = '${user.product_id}',
                       orders_descrip = '${user.orders_descrip}',
                       orders_totalprice = '${user.orders_totalprice}',
                       orders_reviews = '${user.orders_reviews}'
                       where orders_id = '${user.orders_id}'`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

// <============================DELETE USER==================>

routers.delete('/orders/:orders_id', (req, res)=> {
    let insertQuery = `delete from orders where orders_id=${req.params.orders_id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

// client.connect();


module.exports=routers;
