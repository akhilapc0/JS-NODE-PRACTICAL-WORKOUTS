
const express=require('express')
const app=express()

const blockTime=(req,res,next)=>{
    const hour=new Date().getHours();
    if(hour>= 22 || hour <6){
        res.send("access denied")
    }
    next()
}

app.get('/',blockTime,(req,res)=>{
    res.send("welcome akhila...")
})

app.listen(3000,()=>{
    console.log("server running on port 3000")
})