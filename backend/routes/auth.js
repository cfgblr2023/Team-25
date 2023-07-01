const express = require("express");
const  jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const Router = express.Router();

const MenteeModel = require('../database/schema/Mentee');
const verifyMentee = require("../middleware/verifyMentee");
const ses = require("../services/aws");
const MentorModel = require("../database/schema/Mentor");
const verifyMentor = require("../middleware/verifyMentee");
const AdminModel = require("../database/schema/admin");



/* 
Route     /verify
descrip   load user using token
params    none
access    public
method    post

*/

Router.get("/student/verify", verifyMentee, async (req, res) => {
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

Router.post("/student/signup", async (req, res) => {
    try {
      const { email } = req.body;
      const user = await MenteeModel.findOne({ email })
      if (!user) {
        
        //DB
        const newUser = await MenteeModel.create({...req.body});
  
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
  
  
  
  Router.post("/student/signin", async (req, res) => {
    try {
      const { password, email } = req.body;
  
      let user = await MenteeModel.findByEmailAndPassword({ email, password });
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

Router.post("/student/forgot-pass", async (req, res) => {
    try {
      const { email } = req.query;
   
      const user = await MenteeModel.findOne({ email });
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
  
  Router.put('/student/reset-pass',async (req,res)=>{
    try {
      const {token, password} = req.body;
      const {id, email} = jwt.verify(token,'forget-pass');
      
      const user = await MenteeModel.findById(id);
      if(user.email!== email){
        return res.status(401).json({message:"Not Authorized", success:false});
      }
     
    const salt= await bcryptjs.genSalt(10);
  
    const secPass= await bcryptjs.hash(password,salt);
      const updatedUser =  await MenteeModel.findByIdAndUpdate(id,{
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
  
  
//mentor

  /* 
Route     /verify
descrip   load user using token
params    none
access    public
method    post

*/

Router.get("/mentor/verify", verifyMentor, async (req, res) => {
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

Router.post("/mentor/signup", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await MentorModel.findOne({ email })
    if (!user) {
      
      //DB
      const newUser = await MentorModel.create({...req.body});

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



Router.post("/mentor/signin", async (req, res) => {
  try {
    const { password, email } = req.body;

    let user = await MentorModel.findByEmailAndPassword({ email, password });
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

Router.post("/mentor/forgot-pass", async (req, res) => {
  try {
    const { email } = req.query;
 
    const user = await MentorModel.findOne({ email });
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

Router.put('/mentor/reset-pass',async (req,res)=>{
  try {
    const {token, password} = req.body;
    const {id, email} = jwt.verify(token,'forget-pass');
    
    const user = await MentorModel.findById(id);
    if(user.email!== email){
      return res.status(401).json({message:"Not Authorized", success:false});
    }
   
  const salt= await bcryptjs.genSalt(10);

  const secPass= await bcryptjs.hash(password,salt);
    const updatedUser =  await MentorModel.findByIdAndUpdate(id,{
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



//admin
/* 
Route     /verify
descrip   load user using token
params    none
access    public
method    post

*/

Router.get("/admin/verify", verifyAdmin, async (req, res) => {
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

Router.post("/admin/signup", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await AdminModel.findOne({ email })
    if (!user) {
      
      //DB
      const newUser = await AdminModel.create({...req.body});

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



Router.post("/admin/signin", async (req, res) => {
  try {
    const { password, email } = req.body;

    let user = await AdminModel.findByEmailAndPassword({ email, password });
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

Router.post("/admin/forgot-pass", async (req, res) => {
  try {
    const { email } = req.query;
 
    const user = await AdminModel.findOne({ email });
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

Router.put('/admin/reset-pass',async (req,res)=>{
  try {
    const {token, password} = req.body;
    const {id, email} = jwt.verify(token,'forget-pass');
    
    const user = await AdminModel.findById(id);
    if(user.email!== email){
      return res.status(401).json({message:"Not Authorized", success:false});
    }
   
  const salt= await bcryptjs.genSalt(10);

  const secPass= await bcryptjs.hash(password,salt);
    const updatedUser =  await AdminModel.findByIdAndUpdate(id,{
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
