import nodemailer from 'nodemailer';

const senderEmail  = process.env.SENDER_EMAIL;
const password = process.env.SENDER_PWD;
const targetEmail = process.env.TARGET_EMAIL;

export default async function contactFormMailer(req, res){
    if(req.method === 'POST'){
        try{
            const formData = JSON.parse(req.body);
            const {name, email, type, question } = formData;

            const transporter = nodemailer.createTransport({
                host: process.env.MAIL_SERVICE,
                auth: {
                    user: senderEmail,
                    pass: password
                }
            });

            const mailOptions = {
                from: `${name} <${senderEmail}>`,
                to: targetEmail,
                subject: `Contact Form: ${name} has a question/comment`,
                replyTo: email,
                html: `<p>${name} has sent you a question about ${type}:<br/>${question}<p>`,
            }

            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.error('Error sending email:', error);
                    res.send({ status: 500, message: 'An error occurred while sending the email.' });
                } else {
                    console.log('Email sent successfully: ', info.response);
                    res.send({ status: 200, message: 'Email sent successfully' });
                }
            });

        } catch (e) {
            console.error('Error processing request:', e);
            res.send({ status: 500, message: 'An error occurred while processing the request.' });
        }
    } else {
        res.send({ status: 405, message: 'Method Not Allowed' }); 
    }
}