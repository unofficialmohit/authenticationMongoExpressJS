const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
},{timestamps:true});
const model=mongoose.model("user",userSchema);
module.exports=model;