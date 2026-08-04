
const express=require('express');
const app=express()
app.use((req,res,next)=>{
    console.log("middleware executed")
    next()
})

app.get('/user',(req,res)=>{
    res.send('hi akhila')
})
.listen(3000)