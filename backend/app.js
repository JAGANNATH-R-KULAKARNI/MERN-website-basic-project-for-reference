const express=require('express');
const path=require('path');
const app=express();
const port=5000;
const dataRoutes=require('./data');


app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',dataRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found :(</h1>');
})
app.listen(port,()=> console.log(`Example app listening on port ${port}`));