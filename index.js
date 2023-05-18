const express=require('express');
const app=express()
require('dotenv').config();
const cors = require('cors');
const User = require("./Routes/UserRoute");

//connect db 
const mongoose=require('mongoose')
const connectDB=require('./db')
connectDB();

app.use(cors()) 
app.use(express.json())

app.use("/api/user", User);


app.listen(5002,()=>{
    console.log("server is running")
})