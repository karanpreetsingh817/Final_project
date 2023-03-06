const User=require("./../model/user_model");

exports.get_all_users =async (req, res, next) => {
        try{
            const users=await User.find();

            res.status(200).json({
                status:"successfull",
                status_code:200,
                users:users
                
            });

        }
        catch(err){
            res.status(400).json({
                status:"failed",
                status_code:400,
                users:err
                
            });

        }





    // res.json({
    //     status: 200,
    //     result: "here your all user result"
    // });
};


exports.get_one_user = async(req, res, next) => {



    try{
        const user=await User.findById(req.params.id);
        res.status(200).json({
            status:"successfull",
            status_code:200,
            users:user
            
        });
    }
    catch(err){
        res.status(400).json({
            status:"failed",
            status_code:400,
            users:err
            
        });

    }


    // res.status(200).json({
    //     staus: 200,
    //     result: "here you one user"
    // })
};


exports.add_user =async (req, res, next) => {
    try{
        console.log(req.body)
        const new_user= await User.create(req.body);
        console.log(new_user)
        res.status(200).json({
            status:'successfull',
            status_code:200,
            result:"new user added successfully",
            new_user:new_user

        })
    }
    catch(err){
        res.status(400).json({
            status:"failed",
            status_code:400,
            result:err
        })
    }
//     res.status(200).json({
//         staus: 200,
//         result: "congartulation!!! user added sussccfully"
//     })
};

exports.update_user =async (req, res, rej) => {
   try{
    const new_user= await User.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true
    });
        res.status(200).json({
            status:'successfull',
            status_code:200,
            result:"new user added successfully",
            new_user:new_user

        })
    }
    catch(err){
        res.status(400).json({
            status:"failed",
            status_code:400,
            result:err
        })
    }

   
    // res.status(200).json({
    //     status: 200,
    //     retsult: "user has beeen updated"
    // })
};

exports.delete_user = async(req, res, rej) => {
    try{
        const new_user= await User.findByIdAndDelete(req.params.id,req.body);
            res.status(200).json({
                status:'successfull',
                status_code:200,
                result:"new user added successfully",
                new_user:new_user
    
            })
        }
        catch(err){
            res.status(400).json({
                status:"failed",
                status_code:400,
                result:err
            })
        }
    
       
       
    
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    // res.status(200).json({
    //     status: 200,
    //     retsult: "user has beeen deleted"
    // })
};
