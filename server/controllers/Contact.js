const mailSender = require("../utils/mailSender");
require("dotenv").config();

const queryRecievedUserMail = require("../mailTemplates/queryReceivedUserMail");
const queryTeamMail = require("../mailTemplates/queryTeamMail");



exports.contact = async (req, res) => {
    try {
        // fetch data from req
        const {name, email, phone, description} = req.body;

        console.log("Contact us controller, sending email.");

        const res1 = await mailSender("sksunariya0099@gmail.com", "SocietyBlogs - " + name + " raised a query.", queryTeamMail(name, email, phone, description));
        const res2 = await mailSender(email, "SocietyBlogs - Query Recieved.", queryRecievedUserMail(name));

        console.log("Contact us email sent.");

        // return response
        if (res1.success && res2.success){
            return res.status(200).json({
                success:true,
                message:"Query sent successfully.",
                
            })
        }
        else{
            return res.status(200).json({
                success: false,
                message: res1.success ? res2.data.message : res1.message
            })
        }

        
    } catch (error) {
        console.log("Error occurred while sending query", error);
        return res.status(200).json({
            success: false,
            message: "Error occurred while sending query."
        })
    }
}