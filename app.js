const express = require("express");
const mongoose = require("mongoose");
const user_route = require("./routers/user_route");
const tour_route = require("./routers/tour_route");
const dotenv = require("dotenv");
dotenv.config({ path: './config.env' });
const port = process.env.PORT || 7070;
const app = express();
app.use(express.json());


//enable post request
app.use(express.urlencoded({
    extended: true,
    limit: "50mb",
    parameterLimit: "50000"
}));
const db = process.env.DATABASE;
console.log(db)
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(data => {
    console.log("connection succsefully with atlas")
}).catch(err => {
    console.log("error error !!!");
});




app.use((req, res, next) => {
    console.log("This is global middleware apply to over");
    next();
});



app.use("/api/users", user_route);
app.use("/api/tours", tour_route);


app.listen(port, (req, res) => { console.log(`server listen at ${port} port.....`) });

