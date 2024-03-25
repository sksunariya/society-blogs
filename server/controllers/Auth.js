const otpGenerator = require("otp-generator");
const OTP = require("../models/OTP");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const mailSender = require("../utils/mailSender");
const otpVerificationMail = require("../mailTemplates/otpVerificationMail");
require("dotenv").config();



// send OTP

exports.sendOtp = async (req, res) => {
    try {
        // fetch email from request
        const {email, forgotPassword} = req.body;
        // Check if user exists
        const user = await User.findOne({email});
        if (user && !forgotPassword){
            return res.status(200).json({
                success:false,
                message: "User is already registered."
            })
        }

        try {
            // generate otp 
            var otp = otpGenerator.generate(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets: false,
                specialChars:false,
            });
            // console.log("Generated OTP: ", otp);

            const otpPayload = {email, otp};

            //create entry for OTP in DB
            const otpBody = await OTP.create(otpPayload);

            // console.log("Entry created in DB for generated Otp: ", otpPayload);

            const mailResponse = await mailSender(email, "SocietyBlogs - Email Authentication", otpVerificationMail(otp));

            // return response
            res.status(200).json({
                success: true,
                message: "OTP sent successfully.",
            })

        } catch (error) {
            console.log("Error while generating OTP in sendOtp controller.", error);
            return res.json({
                success:false,
                message: "Error while sending OTP."
            })
        }
        
    } catch (error) {
        console.log("Error occurred in generating otp.", error);
        res.status(500).json({
            success: true,
            message: "Error occurred in generating OTP."
        })
    }

}



// signup

exports.signUp = async (req, res) => {
    try {
        // fetch data from req
        const {firstName, lastName, email, password, confirmPassword, accountType, otp} = req.body;

        // check if user exists
        const existingUser = await User.findOne({email});
        if (existingUser){
            return res.status(200).json({
                success:false,
                message:"User is already registered."
            })
        }

        // find most recent OTP stored for the user
        const recentOtp = await OTP.find({email}).sort({createdAt:-1}).limit(1);
        // console.log("Most recent OTP for the user is: ", recentOtp);

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


        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            accountType,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`
        })

        // return response
        return res.status(200).json({
            success:true,
            message:"user registered successfully.",
            user
        })

        
    } catch (error) {
        console.log("Error occurred while signing up", error);
        res.status(500).json({
            success: true,
            message: "Error occurred while signing up"
        })
    }
}



// login

exports.login = async (req, res) => {
    try {
        //fetch data from req
        const {email, password} = req.body;

        // validate email
        if (!email || !password) {
            return res.status(403).json({
                success:false,
                message:'Fill all the details.'
            })
        }

        // check if user exists
        const user = await User.findOne({email: email});
        if (!user){
            return res.status(404).json({
                success:false,
                message:"User not found."
            })
        }

        const match = await bcrypt.compare(password, user.password);
        // console.log("password match results: ", match);

        if (match){
            const payload = {
                email: user.email,
                id: user._id,
                accountType: user.accountType
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "2h",
            });
            user.token = token;

            const options = {
                expires: new Date(Date.now() + 2*60*60*1000)
            }

            //create cookie and send response
            res.cookie("Token", token, options).status(200).json({
                success:true,
                message:"Logged In successfully.",
                token,
                user
            })
        }
        else{
            return res.status(401).json({
                success:false,
                message:"Password is incorrect."
            })
        }
        
    } catch (error) {
        console.log("Error occurred while logging In", error);
        res.status(500).json({
            success: true,
            message: "Error occurred while logging In"
        })
    }
}


