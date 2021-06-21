const express=require('express');
const mongoose=require('mongoose');
const app=express();
const FoodModel = require('./models/food');
const cors=require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://jagannath_r_k:*n@171845*n@@gadgets.jw7z5.mongodb.net/food?retryWrites=true&w=majority',{
    useNewUrlParser : true
});

app.post('/insert',async (req,res)=>{

    const foodName = req.body.foodName;
    const days=req.body.days;

    const food=new FoodModel({
        foodName : foodName,
        daysSinceIAte : days
    });

    try{
        await food.save();
        res.send('data is inserted');
    }
    catch(err)
    {
        console.log(err);
    }
});

app.get('/read',async (req,res)=>{
    FoodModel.find({},(err,result)=>{
        if(err)
        {
            res.send(err);
        }

        res.send(result);
    });
});

app.put('/update',async (req,res)=>{

    const newfoodname = req.body.newfoodname;
    const id=req.body.id;

    try{
       await FoodModel.findById(id,(err,updatedFoodName)=>{
           updatedFoodName.foodName=newfoodname;
           updatedFoodName.save();
           res.send("update");
       })
    }
    catch(err)
    {
        console.log(err);
    }
});

app.delete('/delete/:id',async (req,res)=>{
    const id=req.params.id;
   
    await FoodModel.findByIdAndRemove(id).exec();

    res.send("deleted");
});

app.listen(3001,()=>{
    console.log('server running on port 3001');
})