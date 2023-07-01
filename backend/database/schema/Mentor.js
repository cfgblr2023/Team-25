const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const MentorSchema = new mongoose.Schema({
    name:
    {
        type: String,
    },
    email:
    {
        type: String,
        required: true,
        lowercase:true
    },
    password:
    {
        type: String
    },
    status:{
        type:String,
        default: 'Available'
    }
    },
    {
        timestamps: true
    });

MentorSchema.methods.generateJwtToken = function () {
    return jwt.sign({ user: this._id.toString() }, process.env.JWT_TOKEN, {expiresIn: "8h"});
};

//custom login
MentorSchema.statics.findByEmailAndPassword =
    async ({ email, password}) => {
        //check whether user exists
        const user = await MentorSchema.findOne({ email });
        
        if (!user) {
            throw new Error("User does not exist");
        }
        // compare passwords
        const doesPasswordMatch = await bcrypt.compare(password, user.password);
        if (!doesPasswordMatch) {
            throw new Error("Invalid password");
        }
        return user;
    };


//hashing and salting

MentorSchema.pre("save", function (next) {
    const user = this;
    //password is not modified  
    if (!user.isModified("password")) return next();
    //generating bcrypt salt
    bcrypt.genSalt(8, (error, salt) => {
        if (error) return next(error);
        //hashing the password
        bcrypt.hash(user.password, salt, (error, hash) => {
            if (error) return next(error);
            //assigning hashed password
            user.password = hash;
            return next();
        })

    })

});

const MentorModel = mongoose.model("Mentor", MentorSchema);
module.exports = MentorModel;