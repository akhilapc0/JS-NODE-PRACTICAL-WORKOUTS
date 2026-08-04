

const {parentPort} =require('worker_threads');

let sum=0;

for(let i=0;i<100000000;i++){
    sum+=i
}

parentPort.postMessage(sum)


//app.js



const {Worker} =require('worker_threads');

console.log("starting")

const worker=new Worker('./worker1.js')

worker.on("message",(result)=>{
    console.log("sum is: ",result)
})

console.log("continuing")