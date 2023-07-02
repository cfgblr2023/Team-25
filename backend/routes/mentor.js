const express = require("express");
const Module = require("../database/schema/Module");
const SessionsModel = require("../database/schema/sessions");
const MenteeModel = require("../database/schema/Mentee");
const BatchModel = require("../database/schema/Batch");
const verifyMentor = require("../middleware/verifyMentee");
const Router = express.Router();

Router.post("/module", async (req, res) => {
  try {
    const newModule = await Module.create({ ...req.body });


        return res.status(200).json({  module: newModule, success: true, message: "Module created Successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message, success: false });

    }
});
Router.delete('/module/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const del = await Module.findByIdAndDelete(id);
        return res.status(200).json({ success: true, message: "Module deleted Successfully" })
    } catch (error) {
        return res.status(500).json({ message: error.message, success: false });
    }
});

Router.post("/session/:moduleId", async (req, res) => {
  try {
    const { moduleId } = req.params;
    const newSession = await SessionsModel.create({ ...req.body });
    await Module.findByIdAndUpdate(
      moduleId,
      {
        $push: {
          session: newSession._id,
        },
      },
      {
        new: true,
        upsert: true,
      }
    );


        return res.status(200).json({  session: newSession, success: true, message: "Session created Successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message, success: false });

    }
});
Router.delete('/session/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const del = await SessionsModel.findByIdAndDelete(id);
        return res.status(200).json({ success: true, message: "Session deleted Successfully" })
    } catch (error) {
        return res.status(500).json({ message: error.message, success: false });
    }
});

Router.get("/batch/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // const batch = await BatchModel.findById(id).populate("Modules");
    const [batch] = await BatchModel.aggregate([
      {
        $match: {
          $expr: {
            $eq: ["$_id", toObjectId(id)],
          },
        },
      },
      {
        $lookup: {
          from: "modules",
          let: { modules: "$modules" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$_id", "$$modules"],
                },
              },
            },
            {
              $lookup: {
                from: "sessions",
                let: { sessions: "$sessions" },
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $eq: ["$_id", "$$sessions"],
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ]);


        return res.status(200).json({  batch: batch, success: true, message: "Batch fetched Successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message, success: false });

    }
});

Router.get('/batch',verifyMentor, async (req, res) => {
    try {
        const  {_id:mentorId}  = req.user
        const newBatch = await BatchModel.find({ mentor: mentorId }).populate("modules mentor mentee");


        return res.status(200).json({  batch: newBatch, success: true, message: "Batch fetched Successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message, success: false });

    }
});

Router.get('/mentee/:menteeId', async (req, res) => {
    try {
        const { menteeId } = req.params
        const Mentee = await MenteeModel.findById(menteeId);


        return res.status(200).json({  mentee: Mentee, success: true, message: "Mentee fetched Successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message, success: false });

    }
});

Router.put("/progress/:moduleId", async (req, res) => {
  try {
    const { moduleId } = req.params;
    const module = await Module.findByIdAndUpdate(
      moduleId,
      {
        $set: {
          progress: 1,
        },
      },
      {
        new: true,
        upsert: true,
      }
    );


        return res.status(200).json({  module: module, success: true, message: "modules fetched Successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message, success: false });

    }
});

//to do upcoming sessions

//mentee APIs

Router.get("/upcoming", async (req, res) => {
  try {
    return res.json({});
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
});



module.exports = Router;
