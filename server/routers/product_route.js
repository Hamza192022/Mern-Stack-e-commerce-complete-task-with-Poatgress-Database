const client = require("../connection/conn")
const express = require('express');
const routers = new express.Router()
// const cors = require("cors")
// const app = express();
// app.use(cors())

// <============================get all users==================>
routers.get('/products', (req, res)=>{
    client.query(`Select * from product`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})


// <============================get single users==================>
routers.get('/products/:product_id', (req, res)=>{
    client.query(`Select * from product where product_id=${req.params.product_id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

// <============================create user==================>
routers.post('/products', (req, res)=> {
    const user = req.body;
    let insertQuery = `INSERT INTO product(product_id, product_name, product_descrip, product_price,product_color,product_quantity,product_image) 
                       VALUES(${user.product_id}, '${user.product_name}', '${user.product_descrip}', '${user.product_price}','${user.product_color}','${user.product_quantity}','${user.product_image}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('New Customer insert successful')
        }
        else{ 
            console.log("ERROR",err.message) }
    })
    client.end;
})

// <============================UPDATE USER==================>

routers.put('/products/:product_id', (req, res)=> {
    let user = req.body;
    let updateQuery = `update product
                       set product_name = '${user.product_name}',
                       product_descrip = '${user.product_descrip}',
                       product_price = '${user.product_price}',
                       product_color = '${user.product_color}',
                       product_quantity = '${user.product_quantity}',
                       product_image = '${user.product_image}'

                       where product_id = ${user.product_id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

// <============================DELETE USER==================>

routers.delete('/products/:product_id', (req, res)=> {
    let insertQuery = `delete from product where product_id=${req.params.product_id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message)
        console.log("error is here") }
    })
    client.end;
})

// client.connect();

module.exports=routers;