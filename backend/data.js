const express=require('express');

const router=express.Router();

router.get('/',(req,res)=>{
    res.send("Hello Ronaldo");
});

router.get('/messi',(req,res)=>{
    res.send("Hello messi");
});

router.get('/ReactExpressConnection',(req,res)=>{
    res.send("It worked LMAO");
});

router.get('/jagannath',(req,res)=>{
    res.send("Jagannath R Kulakarni");
});


module.exports=router;