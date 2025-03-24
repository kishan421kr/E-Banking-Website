const nodemailer = require("nodemailer");

const sendEmail=async(email,subject,text)=>{
    // console.log("processing mail sending")
    if(!email){
        console.error("No email is found");
        return false;
    }
    // console.log(email);
    try {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
            });
    
        var mailOptions = {
            from: process.env.MY_EMAIL,
            to: email,
            subject: subject,
            text: text
            };
         const mail = await transporter.sendMail(mailOptions);
        //  console.log("Email sent successfully:", mail.messageId);
         return true;
    } catch (error) {
        console.error(" Error sending email:", error);
        return false;
    }
    
}
module.exports = sendEmail