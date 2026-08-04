
const http=require('http');

const server=http.createServer((req,res)=>{
    res.end("hi akhila pc")
})


server.listen(3000,()=>{
    console.log("server running....")
})
