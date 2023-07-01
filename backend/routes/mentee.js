const express = require("express");
const ResourcesModel = require("../database/schema/resources");
const Router = express.Router();



Router.post('/feedback',async(req, res)=>{
    try {
        const newFeedback = await FeedbackModel.create({...req.body});
    
    
          return res.status(200).json({ token, feedback: newFeedback, success: true , message:"feedback added Successfully"});
    } catch (error) {
        return res.status(500).json({ message: error.message, success: false });
        
    }
    });


    Router.get('/resources/:ModuleId',async(req, res)=>{
        try {
            const {ModuleId} = req.params;
            const newResource= await ResourcesModel.find({module: ModuleId});
        
              return res.status(200).json({ token, feedb: newResource, success: true , message:"Resouce fetched Successfully"});
        } catch (error) {
            return res.status(500).json({ message: error.message, success: false });
            
        }
        });

module.exports = Router;