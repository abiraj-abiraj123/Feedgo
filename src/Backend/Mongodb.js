require('mongoose');
let mongoUrl="";
export let mongodb=mongoose.connect("").then(res=>console.log("Connection Establish")).catch(err=>console.log("Something Wrong"));

let Schema=new mongoose.Schema({
    question:{type:string,required},
    options:{type:string,required},
})
let model=mongoose.model("questions",Schema);