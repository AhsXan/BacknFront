import 'dotenv/config'
//const express = require('express');

import express from 'express';
const app= express()


app.get("/api/products",(req,res)=>{
    const products = [
        {
          id: 1,
          name: "Wireless Mouse",
          price: 29.99,
          inStock: true
        },
        {
          id: 2,
          name: "Laptop Stand",
          price: 49.99,
          inStock: true
        },
        {
          id: 3,
          name: "Mechanical Keyboard",
          price: 89.99,
          inStock: false
        },
        {
          id: 4,
          name: "USB-C Hub",
          price: 24.99,
          inStock: true
        },
        {
          id: 5,
          name: "Noise Cancelling Headphones",
          price: 199.99,
          inStock: false
        }
      ];
      
res.send(products)

})
//const Port="3500"
app.listen(process.env.PORT,()=>{
console.log("Server is Running on ",process.env.PORT)
})