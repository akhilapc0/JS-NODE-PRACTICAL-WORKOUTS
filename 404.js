
const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send("home page")
})

app.get('/about',(req,res)=>{
    res.send("about page")
})

app.use((req,res)=>{
    res.status(404).send("404 page not found")
})

app.listen(3000,()=>{
    console.log("server running")
})