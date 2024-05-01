const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
const PORT=4000;
const database=require('./database/database');
const {restrictToLoggedinUserOnly}=require('./middleware/auth')
const displayRouter=require('./routes/userDisplayRoutes');
const authRouter=require('./routes/userAuthRoute');
app.use(express.json());
app.use(cookieParser());
app.use('/api/v1',authRouter);
app.use('/api/v1',restrictToLoggedinUserOnly,displayRouter);
app.listen(PORT,()=>{
    console.log("Listening on Port "+PORT);
})