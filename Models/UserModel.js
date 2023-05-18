const mongoose=require('mongoose')

const User=new mongoose.Schema(
    {
        name:{type:String},
        email:{type:String},
        mobile:{type:Number},
    },
   
)

const model=mongoose.model('UserData',User) 
module.exports=model