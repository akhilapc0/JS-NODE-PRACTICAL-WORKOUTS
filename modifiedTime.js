
const express=require('express');
const app=express()

const modifiedTime=(req,res,next)=>{
    req.modifiedTime=new Date();
    next()
}

app.get('/',modifiedTime,(req,res)=>{
    res.json({
        name:"Akhila",
        age:24,
        modifiedTime:req.modifiedTime
    })
})

app.listen(3000,()=>{
    console.log("server running on port 3000")
})