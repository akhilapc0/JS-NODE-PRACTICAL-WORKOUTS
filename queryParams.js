
const express=require('express');
const app=express();

app.get('/products',(req,res)=>{
    res.send(req.query)
})

app.listen(3000,()=>{
    console.log("server running")
})