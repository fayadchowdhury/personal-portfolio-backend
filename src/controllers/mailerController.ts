import { Request, Response } from "express";
import { MAILER_CONFIG } from "../config/mailer";
import { ContactSchema } from "../schemas";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: MAILER_CONFIG.MAILER_SERVICE,
    auth: {
        user: MAILER_CONFIG.MAILER_EMAIL,
        pass: MAILER_CONFIG.MAILER_PASSWORD
    }
});

export async function sendContactResponseEmail(req: Request<{}, {}, ContactSchema>, res: Response) {

    try {
        const { name, email, message } = req.body;
        const subject: string = `New contact form submission from ${name} - ${email}`

        const info = await transporter.sendMail({
            from: `"${MAILER_CONFIG.MAILER_USER}" <${MAILER_CONFIG.MAILER_EMAIL}>`,
            to: MAILER_CONFIG.MAILER_EMAIL,
            subject,
            text: message,
            replyTo: email
        });

        res.status(200).json(
            {
                "message": "Email sent successfully"
            }
        )
    }
    catch (err) {
        console.log(`Error occurred when sending email: ${err}`);
        res.status(500).json(
            {
                "message": `Failed to send email. ${err}`
            }
        )
    }
};