const express = require("express");
const ResourcesModel = require("../database/schema/resources");
const Router = express.Router();



Router.post('/feedback',async(req, res)=>{
    try {
        const newFeedback = await FeedbackModel.create({...req.body});
    
    
          return res.status(200).json({ feedback: newFeedback, success: true , message:"feedback added Successfully"});
    } catch (error) {
        return res.status(500).json({ message: error.message, success: false });
        
    }
    });


    Router.get('/resources/:ModuleId',async(req, res)=>{
        try {
            const {ModuleId} = req.params;
            const newResource= await ResourcesModel.find({module: ModuleId});
        
              return res.status(200).json({  feedb: newResource, success: true , message:"Resouce fetched Successfully"});
        } catch (error) {
            return res.status(500).json({ message: error.message, success: false });
            
        }
        });

        Router.get('/batch/:id', async (req, res) => {
            try {
                const { id } = req.params;
                // const batch = await BatchModel.findById(id).populate("Modules");
                const [batch] = await BatchModel.aggregate([
                    {
                        $match: {
                            $expr: {
                                $eq: ['$_id', toObjectId(id)],
                            },
                        },
                    },
                    {
                        $lookup: {
                            from: "modules",
                            let: { modules: '$modules' },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: {
                                            $eq: ['$_id', '$$modules'],
                                        },
                                    },
                                },
                                {
                                    $lookup: {
                                        from: "sessions",
                                        let: { sessions: '$sessions' },
                                        pipeline: [
                                            {
                                                $match: {
                                                    $expr: {
                                                        $eq: ['$_id', '$$sessions'],
                                                    },
                                                },
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]);
        
        
                return res.status(200).json({ batch: batch, success: true, message: "Batch fetched Successfully" });
            } catch (error) {
                return res.status(500).json({ message: error.message, success: false });
        
            }
        });
        
        Router.get('/batch/:menteeId', async (req, res) => {
            try {
                const { menteeId } = req.params
                const newBatch = await BatchModel.find({ mentee: menteeId }).populate("modules");
        
        
                return res.status(200).json({  mentee: newBatch, success: true, message: "Batch fetched Successfully" });
            } catch (error) {
                return res.status(500).json({ message: error.message, success: false });
        
            }
        });

module.exports = Router;
