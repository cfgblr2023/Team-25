const express = require("express");
const  jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const Router = express.Router();

const UserModel = require('../database/schema/Mentee');
const getUserStatus = require("../middleware/verifyMentee");
const ses = require("../services/aws");



/* 
Route     /verify
descrip   load user using token
params    none
access    public
method    post

*/

Router.get("/verify", getUserStatus, async (req, res) => {
    try {
      if (req.user) {
        return res.status(200).json({ success: true, user: req.user });
      }
      else {
        throw new Error("Something's Wrong, Try Signing in again");
      }
  
    } catch (error) {
      return res.status(500).json({ message: error.message, success: false });
    }
  })
/* 
Route     /signup
descrip   signup with email and password
params    none
access    public
method    post

*/

Router.post("/signup", async (req, res) => {
    try {
      const { email } = req.body;
      const user = await UserModel.findOne({ email })
      if (!user) {
        
        //DB
        const newUser = await UserModel.create({...req.body});
  
        //JWT AUth Token
        const token = newUser.generateJwtToken();
  
        return res.status(200).json({ token, user: newUser, success: true });
      }
      throw new Error('User Already Exists');
  
    } catch (error) {
      return res.status(500).json({ message: error.message, success: false });
    }
  })
  
  /* 
  Route     /signin
  descrip   signin with userName and password
  params    none
  access    public
  method    post
  
  */
  
  
  
  Router.post("/signin", async (req, res) => {
    try {
      const { password, email } = req.body;
  
      let user = await UserModel.findByEmailAndPassword({ email, password });
      user.password = null;
      //JWT AUth Token
      const token = user.generateJwtToken();
  
      return res.status(200).json({ token, success: true, user: user });
  
    } catch (error) {
      return res.status(500).json({ message: error.message, success: false });
    }
  })


  /* 
Route     /forget-pass
descrip   forget pass, so lets change it
params    email
access    public
method    GET

*/

Router.post("/forgot-pass", async (req, res) => {
    try {
      const { email } = req.query;
   
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not Found", success: false });
      }
      const token = jwt.sign({id:user._id.toString(),email:user.email},'forget-pass',{expiresIn:"10m"});
      
     await ses.sendEmail({
        Destination: {
          ToAddresses: [email],
        },
        Message: {
          Body: {
            Html: {
             Data: `forget pass link : ${token}`
            },
          },
          Subject: {
            Charset: 'UTF-8',
            Data: 'Reset password link',
          },
        },
        ReplyToAddresses: [],
        Source: 'samarth <samarthsingh890.ss@gmail.com>',
      },function (err, data) {
        if (err) {
          console.log(err);
          throw new Error(err);
        } else console.log(data);
      });
      
      return res.status(200).json({message:"email sent successfully", success:true});
    } catch (error) {
      return res.status(500).json({ message: error.message, success: false });
    }
  
  
  })
  
  Router.put('/reset-pass',async (req,res)=>{
    try {
      const {token, password} = req.body;
      const {id, email} = jwt.verify(token,'forget-pass');
      
      const user = await UserModel.findById(id);
      if(user.email!== email){
        return res.status(401).json({message:"Not Authorized", success:false});
      }
     
    const salt= await bcryptjs.genSalt(10);
  
    const secPass= await bcryptjs.hash(password,salt);
      const updatedUser =  await UserModel.findByIdAndUpdate(id,{
        password: secPass
      },{
        new:true,
        upsert:true
      })
      res.status(200).json({message:"Password changed successfully",success:true});
    } catch (error) {
      return res.status(500).json({ message: error.message, success: false });
    }
  })
  
  
module.exports = Router;
