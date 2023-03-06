const mongoose =require("mongoose");


const user_schema=new mongoose.Schema({
    name:{
        type:String,
        require:[true,"Must enter user name"],
        trim:true

    },
    email:{
        type:String,
        require:[true,"Must enter your email address"],
        trim:true
    },
    role:{
        type:String,
        trim:true,
        default:"User"
    },
    active:{
        type:Boolean
    },
    photo:{
        type:String
    },
    password:{
        type:String,
        trim:true,
        require:[true,"must enter sterong password"]
    }


});

const User= mongoose.model("User",user_schema)

module.exports=User;