
const express=require('express');
const router=express.Router();

router.use((req,res,next)=>{
    console.log('user middleware')
    next()
})

router.get('/',(req,res)=>{
    res.send('user page')
})
module.exports=router;
