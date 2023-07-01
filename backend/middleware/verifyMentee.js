const {verify} =  require("jsonwebtoken");
const MenteeModel = require("../database/schema/Mentee");

const getUserStatus = async (req, res, next) => {

    //get the user from the jwt token and add id to req object
    try {
        const res = req.header('auth');
        const token = res.split(" ")[1];
        if (!token) {
            res.status(401).send({ message: "please authenticate using a valid token token not found" })
        }
        const data = verify(token, process.env.JWT_TOKEN);
        const result = await MenteeModel.findById(data.user).select("-password");

        if (!result) {
            throw new Error("User not found");
        }

        req.user = result
        next();
    }
    catch (error) {
        res.status(401).send({ message: "please login again", error: error.message })
    }
}

module.exports = getUserStatus;