const express = require("express");
const cors = require("cors");
const ConnectDB = require("./database/connection");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true, limit : '10mb'}));
app.use(cors());



//routes

const authRoute = require('./routes/auth');
const adminRoute = require('./routes/admin');
const mentorRoute = require('./routes/mentor');


app.get("/",(req,res)=> res.json({message: "setup success !!"}));
app.use("/auth",authRoute);
app.use("/admin",adminRoute);
app.use('/mentor',mentorRoute)

const PORT= process.env.PORT || 4000
app.listen(PORT,()=>
    ConnectDB().then(()=> 
 console.log("Server is up and running"))
 .catch((e)=>console.log("DB connection failed",e))
 );
