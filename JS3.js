
const express=require('express');
const app=express();
app.get('/sum',(req,res)=>{
    let a=Number(req.query.a);
    let b=Number(req.query.b);

    let sum=a+b;

    res.send(`The sum of ${a} and ${b} is ${sum}`)
})

app.listen(3000,()=>{
    console.log("server running on port 3000")
})