const express=require('express');
const path=require('path');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.send("Hello admin");
});

router.get('/ben',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','ben.html'));
});

router.get('/jag',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','jag.html'));
});

router.get('/messi',(req,res,next)=>{
    res.send("Hello messi");
});

router.get('/ReactExpressConnection',(req,res,next)=>{
    res.send("It worked LMAO");
});

router.get('/jagannath',(req,res,next)=>{
    res.send("Jagannath R Kulakarni");
});


module.exports=router;