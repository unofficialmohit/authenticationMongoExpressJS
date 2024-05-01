const { handleUserLogin } = require("../controllers/userController");
const { getUser } = require("../services/sessionAuthService");

async function restrictToLoggedinUserOnly(req,res,next){
    const userUid=req.cookies.uid;
    if(!userUid)
       return res.send({message:"Please login first"});
        // handleUserLogin(req,res);
    const user=getUser(userUid);
    if(!user)
        return res.send({message:"Please login first"})
        // handleUserLogin(req,res);

    req.user=user;
    next();
}
module.exports={
    restrictToLoggedinUserOnly
}