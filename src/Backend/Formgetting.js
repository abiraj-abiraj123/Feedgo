let express=require('express');
let app=express();
let Model=require('./Mongodb.js');
app.post('/question',(req,res)=>{
    let data=req.body;
    let object=new Model();
    object.save(data);
})
app.get('/question',(req,res)=>{
    let data=req.query;
    let object=new Model();
    res=object.findAll(data);

})
app.update('/question',(req,res)=>{
    let data=req.query;
    let object=new Model();
    res=object.findAll(data);

})