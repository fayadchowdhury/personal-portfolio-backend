import { Request, Response } from "express";
import { MAILER_CONFIG } from "../config/mailer";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: MAILER_CONFIG.MAILER_SERVICE,
    auth: {
        user: MAILER_CONFIG.MAILER_EMAIL,
        pass: MAILER_CONFIG.MAILER_PASSWORD
    }
});

export async function sendMail(req: Request, res: Response) {

    try {
        // TODO: Add validation here for email addresses, subject and text content
        let { to, subject, text, html, replyTo } = req.body;
        if (!html || html.length === 0) {
            html = text;
        }
        const info = await transporter.sendMail({
            from: `"${MAILER_CONFIG.MAILER_USER}" <${MAILER_CONFIG.MAILER_EMAIL}>`,
            to,
            subject,
            text,
            html,
            replyTo
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