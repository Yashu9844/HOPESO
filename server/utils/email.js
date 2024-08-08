import nodemailer from 'nodemailer';


export const sendEmail = async (option) =>{

    try {
          
        const transporter = nodemailer.createTransport({
            host:process.env.EMAIL_HOST,
            port:process.env.EMAIL_PORT,
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASSWORD,
            }
        })

        const emailOptions = {
            from:"Yashwanth@gamil.com",
            to:option.to,
            subject:option.subject,
            text:option.text
        }
       
     await  transporter.sendMail(emailOptions);

        
    } catch (error) {
        console.error(error);
    }
}