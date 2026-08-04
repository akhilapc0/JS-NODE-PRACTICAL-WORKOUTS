
// const http=require('http');

// http.createServer((req,res)=>{
//     res.setHeader("Content-Type","text/plain");
//     res.end('hello')
// }).listen(3000)


const http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-type':'text/plain'
    })
    res.end("hi akhila")
}

).listen(3000)