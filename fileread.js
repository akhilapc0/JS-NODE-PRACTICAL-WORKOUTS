
const fs=require('fs')
const express=require('express')
const app=express()
app.get('/file',(req,res)=>{
    
    fs.readFile('data.txt','utf8',(err,data)=>{
        if(err){
            return res.status(500).send("Error reading file")
        }
        else{
            res.send(data)
        }
    })
})

app.listen(3000,()=>{
    console.log("server running on port 3000")
})