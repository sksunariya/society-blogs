const User = require("../models/User");
const jwt = require("jsonwebtoken");
const mailSender = require("../utils/mailSender");
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const OTP = require("../models/OTP");

const passwordResetMail = require('../mailTemplates/resetPasswordMail');

// resetPassword token

exports.resetForgotPassword = async (req, res) => {
    try {

        // fetch email from req
        const {email, otp, password} = req.body;
        console.log("Inside reset forgot password")
        // check if user exists
        const user = await User.findOne({email: email});
        if (!user) {
            return res.json({
                success:false,
                message: "User is not registered. Please sign up first."
            })
        }


        // find most recent OTP stored for the user
        const recentOtp = await OTP.find({email}).sort({createdAt:-1}).limit(1);
        console.log("Most recent OTP for the user is: ", recentOtp);

        //validate OTP
        if (recentOtp.length == 0){
            return res.status(400).json({
                success: false,
                message:"OTP not found"
            })
        }
        else if (otp !== recentOtp[0].otp){
            return res.status(200).json({
                success: false,
                message:"OTP is invalid."
            })
        }

                
        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);


        const updatedUser = await User.findOneAndUpdate({email: email},{
            password: hashedPassword,
        }, {new: true})


        // send mail
        // await mailSender(email, "SocietyBlogs - Reset Password", "Dear User, Your SocietyBlogs account's password was reset. If it wasn't you, then reply to this mail.");
        await mailSender(email, "SocietyBlogs - Reset Password", passwordResetMail());


        // return response
        return res.status(200).json({
            success:true,
            message: "Password reset was successfull."
        })
        
    } catch (error) {
        console.log("Error while resetting password.", error);
        return res.status(500).json({
            success: false,
            message: "Error occurred while resetting password."
        })
    }

}

