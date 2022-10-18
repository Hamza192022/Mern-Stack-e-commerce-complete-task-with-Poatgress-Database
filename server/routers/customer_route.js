const client = require("../connection/conn")
const express = require('express');
const routers = new express.Router()

// <============================get all users==================>
routers.get('/customers', (req, res)=>{
    client.query(`Select * from customer`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})



// <============================get single users==================>
routers.get('/customers/:id', (req, res)=>{
    client.query(`Select * from customer where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

// <============================create user==================>
routers.post('/customers', (req, res)=> {
    const user = req.body;
    let insertQuery = `INSERT INTO customer(id, cust_name, cust_phone, cust_email,cust_address) 
                       VALUES(${user.id}, '${user.cust_name}', '${user.cust_phone}', '${user.cust_email}','${user.cust_address}')`

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

routers.put('/customers/:id', (req, res)=> {
    let user = req.body;
    let updateQuery = `update customer
                       set cust_name = '${user.cust_name}',
                       cust_phone = '${user.cust_phone}',
                       cust_email = '${user.cust_email}',
                       cust_address = '${user.cust_address}'
                       where id = ${user.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

// <============================DELETE USER==================>

routers.delete('/customers/:id', (req, res)=> {
    let insertQuery = `delete from customer where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})


module.exports=routers;