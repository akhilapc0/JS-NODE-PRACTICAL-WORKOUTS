
const fs=require('fs');

fs.writeFile('sample.txt',"helo akhila",(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("file created successfully")
})