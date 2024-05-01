const userSchema=require('../model/userSchema')
const {setUser,removeUser}=require('../services/sessionAuthService')
const {v4 : uuidv4}=require('uuid')
const getDetails=async(req,res)=>{
 return res.status(200).send(await userSchema.find({}));
}
const handleUserSignup=async (req,res)=>{
    console.log(req.body);
    const{username,email,password}=req.body;
    await userSchema.create({
        username,
        email,
        password
    })
   return  res.status(200).send(await userSchema.find({}));
    // return res.render("home");
}
const handleUserLogin=async (req,res)=>{
    console.log(req.body);
    const{email,password}=req.body;
    const user=await userSchema.findOne({email,password});
    if(!user)
    {
        res.status(400).send({message:"UNAUTHORISED ACCESS"});
    }
    const sessionId=uuidv4();
    setUser(sessionId,user);
    res.cookie('uid',sessionId);
    return res.status(200).send({message:"Login Successfull"});
    // return res.render("home");
}

const handleLogout=async(req,res)=>{
removeUser(req.cookies.uid);
return res.status(200).send({message:"Log out successful"})
}

module.exports={
    getDetails,
    handleUserSignup,
    handleUserLogin,
    handleLogout
}