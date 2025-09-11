import { Request, Response } from "express";
import { redisClient } from "../config";

export async function getTaglinesData(req: Request, res: Response) {
    try {
        const taglines = await redisClient.json.get("taglines");
        if (taglines) {
            res.status(200).json(
                {
                    "taglines": taglines
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
        console.log(`Error getting taglines data: ${err}`);
        res.status(500).json(
            {
                "message": `Error getting taglines data: ${err}`
            }
        );
    }
}