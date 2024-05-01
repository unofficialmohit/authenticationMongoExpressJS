const mongoose=require('mongoose');
const database=async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/mohitDB2');
        console.log("Database Connected Successfully");
    }
    catch(error)
    {
        console.log(error);
    }
}
database();