const express = require("express");
const { get_all_users, get_one_user, add_user, update_user, delete_user } = require("./../controller/user_handler.js");
const router = express.Router();

router.use((req, res, next) => {
    console.log("this middle-ware is applicable for all user routes");
    next();
});
router.use("/:id", (req, res, next) => {
    id = req.params;

    console.log(` Id iS: ${id} this is applicable only for /api/users:id route`);
    next();
})


router.use("/", (req, res, next) => {
    console.log("this is applicable only for /api/users route")
    next();
})



router.route("/")
    .get(get_all_users)
    



router.route("/:id")
    .get(get_one_user)
    .post(add_user)
    .patch(update_user)
    .delete(delete_user)




module.exports = router;



