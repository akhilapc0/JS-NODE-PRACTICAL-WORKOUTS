

// const {exec}=require('child_process');
// const { stderr, stdout } = require('process');

// exec(" echo hi developer akhila",(error,stdout,stderr)=>{
//     if(error){
//         console.log(error);
//         return;
//     }
//     console.log(stdout)
// })


const {fork} =require('child_process');

fork('./worker.js')
console.log("Main Process");