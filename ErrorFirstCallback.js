

const fs=require('fs');
fs.readFile("data.txt","utf8",(err,data)=>{
    if(err){
    console.log("Error:",err);
    return;
    }
    console.log(data)
});


