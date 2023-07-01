const express = require("express");
const MenteeModel = require("../database/schema/Mentee");
const MentorModel = require("../database/schema/Mentor");
const BatchModel = require("../database/schema/Batch");
const ses = require("../services/aws");

const Router = express.Router();

//add mentees 

Router.post('/add/mentee',async(req, res)=>{
    try {  
        const {students} = req.body;
        for(i in students){
            const {email, name, language} = students[i];
           var student = await MenteeModel.findOne({ email });
            const mentor  = await MentorModel.findOne({language, status:'available'});
            if(!student){
                student = await MenteeModel.create({
                    name,
                    email,
                    password:"random",
                    language
                });
            }
            await MentorModel.findByIdAndUpdate(mentor._id,{
                $set:{
                    status:"assigned"
                }
            })
            const batch = await BatchModel.create({
                mentor: mentor._id,
                mentee: student._id
            })
            const token = jwt.sign({id:student._id.toString(),email:student.email},'forget-pass',{expiresIn:"10m"});
  
            await ses.sendEmail({
               Destination: {
                 ToAddresses: [email],
               },
               Message: {
                 Body: {
                   Html: {
                    Data: `forget pass link : localhost:3000/auth/reset/${token}`
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
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message, success: false });
    }
});


Router.get('/mentor',async (req,res)=>{
    try {
        const mentors = await MentorModel.find({});
        return res.statusCode(200).json({message:"Fetched all mentore", mentors, success});
    } catch (error) {
        return res.status(500).json({ message: error.message, success: false });
    }
});
Router.put('/batch/mentor',async (req,res)=>{
    try {
        const {batchId, mentorId} = req.query;
        const batch = await BatchModel.findByIdAndUpdate(batchId,{
            $set:{
                mentor: mentorId
            }
        });
        return res.statusCode(200).json({success:true, batch});
    } catch (error) {
        return res.status(500).json({ message: error.message, success: false });
        
    }
});



module.exports = Router; 