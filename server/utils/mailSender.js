const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth:{
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        })

        let info = await transporter.sendMail({
            from: "SocietyBlogs",
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`
        })
        console.log(info);
        return {success: true, info};
        
    } catch (error) {
        console.log("Error occurred while sending mail ", error);
        return {success: false,
                message: "Error occurred while Sending mail."}
    }
}


module.exports = mailSender;