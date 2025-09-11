import { Request, Response } from "express";
import { redisClient } from "../config";

export async function getContactFormData(req: Request, res: Response) {
    try {
        const title = await redisClient.hGet("contactForm", "title");
        const description = await redisClient.hGet("contactForm", "description");
        if (title && description) {
            res.status(200).json(
                {
                    "contactForm": {
                        "title": title,
                        "description": description
                    }
                }
            );
        }
        else
        {
            console.log(`No data at specified key or specified key missing`);
            res.status(404).json(
                {
                    "message": `No data at specified key or specified key missing`
                }
            );
        }
    }
    catch (err: unknown) {
        console.log(`Error getting contact form data: ${err}`);
        res.status(500).json(
            {
                "message": `Error getting contact form data: ${err}`
            }
        );
    }
}