const express=require("express");
const {get_all_tours,get_one_tour,add_tour,update_tour,delete_tour}=require("./../controller/tour_handler");

const router=express.Router();



router.use((req,res,next)=>{
    console.log("this is applicable for all tour routes");
    next();
});


router.use(('/:id'),(req,res,next)=>{
    console.log("second middleware");
    next();
});


router.route("/")
.get(get_all_tours);




router.route("/:id")
.get(get_one_tour)
.post(add_tour)
.patch(update_tour)
.delete(delete_tour);

module.exports=router