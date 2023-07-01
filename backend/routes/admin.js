const express = require("express");
const Module = require("../database/schema/Module");
const AdminModel = require("../database/schema/admin");
const BatchModel = require("../database/schema/Batch");

const Router = express.Router();

//add mentees 

Router.post('/add',async(req, res)=>{

});
Router.post('/module',async(req, res)=>{
try {
    const newModule = await Module.create({...req.body});


      return res.status(200).json({ token, module: newModule, success: true , message:"Module created Successfully"});
} catch (error) {
    return res.status(500).json({ message: error.message, success: false });
    
}
});
Router.delete('/module/:id',async(req, res)=>{
    try {
        const {id} = req.params;
        const del = await Module.findByIdAndDelete(id);
        return res.statusCode(200).json({success:true, message:"Module deleted Successfully"})
    } catch (error) {
        return res.status(500).json({ message: error.message, success: false });
    }
});

Router.post('/add-admin',async(req, res)=>{
    try {
        const newAdmin = await AdminModel.create({...req.body});
    
    
          return res.status(200).json({  admin: newAdmin, success: true , message:"Admin added Successfully"});
    } catch (error) {
        return res.status(500).json({ message: error.message, success: false });
        
    }
    });

    Router.delete('/add-admin/:id',async(req, res)=>{
        try {
            const {id} = req.params;
            const del = await AdminModel.findByIdAndDelete(id);
            return res.statusCode(200).json({success:true, message:"Admin deleted Successfully"})
        } catch (error) {
            return res.status(500).json({ message: error.message, success: false });
        }
    });
    

    Router.get('/batch',async(req, res)=>{
        try {
           
            const newBatch = await BatchModel.find({});
        
        
              return res.status(200).json({ token, admin: newAdmin, success: true , message:"Batch fetched Successfully"});
        } catch (error) {
            return res.status(500).json({ message: error.message, success: false });
            
        }
        });

    Router.get('/batch/:id',async(req, res)=>{
        try {
            const {id} = req.params;
            const newBatch = await BatchModel.findById(id).populate("modules");
        
        
              return res.status(200).json({ token, admin: newAdmin, success: true , message:"Batch fetched Successfully"});
        } catch (error) {
            return res.status(500).json({ message: error.message, success: false });
            
        }
        });

        Router.get('/feedback/:batchId',async(req, res)=>{
            try {
                const {batchId} = req.params;
                const newFeedback= await FeedbackModel.findById(batchId);
            
                  return res.status(200).json({ token, admin: newAdmin, success: true , message:"Feedback received Successfully"});
            } catch (error) {
                return res.status(500).json({ message: error.message, success: false });
                
            }
            });


module.exports = Router; 