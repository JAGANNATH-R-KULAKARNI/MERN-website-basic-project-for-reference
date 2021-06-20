const express=require('express');
const app=express();
const port=5000;
const dataRoutes=require('./data');

app.use(dataRoutes);

app.listen(port,()=> console.log(`Example app listening on port ${port}`));