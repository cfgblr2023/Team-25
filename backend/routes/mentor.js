const express = require("express");
const Module = require("../database/schema/Module");
const SessionsModel = require("../database/schema/sessions");
const MenteeModel = require("../database/schema/Mentee");
const Router = express.Router();

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

    Router.post('/session',async(req, res)=>{
        try {
            const newSession = await SessionsModel.create({...req.body});
        
        
              return res.status(200).json({ token, session: newSession, success: true , message:"Session created Successfully"});
        } catch (error) {
            return res.status(500).json({ message: error.message, success: false });
            
        }
        });
        Router.delete('/session/:id',async(req, res)=>{
            try {
                const {id} = req.params;
                const del = await SessionsModel.findByIdAndDelete(id);
                return res.statusCode(200).json({success:true, message:"Session deleted Successfully"})
            } catch (error) {
                return res.status(500).json({ message: error.message, success: false });
            }
        });

        Router.get('/batch/:id',async(req, res)=>{
            try {
                const {id} = req.params;
                const newBatch = await BatchModel.findById(id).populate("Modules");
            
            
                  return res.status(200).json({ token, batch: newBatch, success: true , message:"Batch fetched Successfully"});
            } catch (error) {
                return res.status(500).json({ message: error.message, success: false });
                
            }
            });

        Router.get('/batch/:mentorId',async(req, res)=>{
        try {
           const {mentorId} = req.params
            const newBatch = await BatchModel.find({mentor: mentorId}).populate("modules");
        
        
              return res.status(200).json({ token, batch: newBatch, success: true , message:"Batch fetched Successfully"});
        } catch (error) {
            return res.status(500).json({ message: error.message, success: false });
            
        }
        });

        Router.get('/mentee/:menteeId',async(req, res)=>{
            try {
               const {mentorId} = req.params
                const Mentee = await MenteeModel.findById(mentorId);
            
            
                  return res.status(200).json({ token, mente: Mentee, success: true , message:"Mentee fetched Successfully"});
            } catch (error) {
                return res.status(500).json({ message: error.message, success: false });
                
            }
            });

            Router.put('/progress/:moduleId',async(req, res)=>{
                try {
                   const {moduleId} = req.params
                    const module = await Module.findByIdAndUpdate(moduleId,{
                        $set:{
                            progress:1
                        }
                    },{
                        new:true,
                        upsert:true
                    });
                
                
                      return res.status(200).json({ token, module: module, success: true , message:"modules fetched Successfully"});
                } catch (error) {
                    return res.status(500).json({ message: error.message, success: false });
                    
                }
                });

                Router.post('/resources',async(req, res)=>{
                    try {
                        const newResources = await ResourcesModel.create({...req.body});
                    
                    
                          return res.status(200).json({ token, resource: newResources, success: true , message:"Resources added Successfully"});
                    } catch (error) {
                        return res.status(500).json({ message: error.message, success: false });
                        
                    }
                    });

                    Router.get('/resources/:Id',async(req, res)=>{
                        try {
                            const {Id} = req.params;
                            const newResources= await ResourcesModel.findById(Id);
                        
                              return res.status(200).json({ token, resource: newResources, success: true , message:"Resources fetched Successfully"});
                        } catch (error) {
                            return res.status(500).json({ message: error.message, success: false });
                            
                        }
                        });


                        module.exports = Router;