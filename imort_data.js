const fs=require("fs");
const Tour=require("./model/tour_model");
const User=require("./model/user_model")
const mongoose=require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: './config.env' });


const db = process.env.DATABASE;
console.log(db)
// connect to data-base
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(data => {
    console.log("connection succsefully with atlas")
}).catch(err => {
    console.log("error error !!!");
});


const data= JSON.parse(fs.readFileSync(`${__dirname}/devdata/tours.json`,'utf-8'));
const user_data=JSON.parse(fs.readFileSync(`${__dirname}/devdata/users.json`,'utf-8'));



const importAll=async()=>{
    try{
    const tours=await Tour.create(data);
    console.log("data added successfully");

    }
    catch(err){
        console.log(err);
    }
}



const deleteAll=async ()=>{
   try{

       const tours=await Tour.deleteMany();
       console.log("data deleted")
   }
   catch(err){
    console.log(err)
   }
    
    
}

const importUsers=async()=>{
    try{
    const users=await User.create(user_data);
    console.log("data added successfully");

    }
    catch(err){
        console.log(err);
    }
}



const deleteUsers=async ()=>{
   try{

       const users=await User.deleteMany();
       console.log("data deleted")
   }
   catch(err){
    console.log(err)
   }
    
    
}



console.log(process.argv)


if(process.argv[2]==='--importAll')
{
    console.log("hi im here");
    importAll();
    
}
if(process.argv[2]==='--deleteAll')
{
    console.log("hi im here");
    deleteAll()
   
}
if(process.argv[2]==='--importuser')
{
    console.log("hi im here");
    importUsers();
    
}
if(process.argv[2]==='--deleteuser')
{
    console.log("hi im here");
    deleteUsers()
   
}