const express = require("express");
const app = express();
const port = 3000;

//----------------------------------------------
// menu
const menu = [
    {"id": "1", "name": "ก๋วยเตี๋ยวหมู", "price": 50},
    {"id": "2", "name": "ก๋วยเตี๋ยวเนื้อ", "price": 60},
    {"id": "3", "name": "ก๋วยเตี๋ยวต้มยำ", "price": 55},
    {"id": "4", "name": "ก๋วยเตี๋ยวเย็นตาโฟ", "price": 50},
    {"id": "5", "name": "ก๋วยเตี๋ยวต้มยำทะเล", "price": 70}
];

//----------------------------------------------
// Homework 1
app.get('/',(req,res)=>{
    res.send("Welcome to Noodle Restaurant");
});

//----------------------------------------------
// Homework 2
app.get('/menu',(req,res)=>{
    res.json(menu);
});

//----------------------------------------------
// Homework 3
app.get('/menu/:id',(req,res)=>{
    const menuid = req.params.id;
    const food = menu.find(m => m.id === menuid);
    res.json(food);
});

//----------------------------------------------
// Homework 4
app.get('/price',(req,res)=>{
    const quantity = Number(req.query.quantity);
    const price = Number(req.query.price);
    const result = quantity * price;
    res.json(result);
});

//----------------------------------------------
// Homework 5
app.get('/discount',(req,res)=>{
    const total = Number(req.query.total);

    if (total >= 500) {
        const result = total * 0.90;
        res.json(result);
    } else {
        res.json(total);
    }
});

//----------------------------------------------
app.listen(port,()=>{
    console.log("Sever is running");
});
