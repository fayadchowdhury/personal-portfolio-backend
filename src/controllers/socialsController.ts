import { Request, Response } from "express";
import { redisClient } from "../config";

export async function getSocialsData(req: Request, res: Response) {
    try {
        const socials = await redisClient.json.get("socials");
        if (socials) {
            res.status(200).json(
                {
                    "socials": socials,
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
        console.log(`Error getting socials data: ${err}`);
        res.status(500).json(
            {
                "message": `Error getting socials data: ${err}`
            }
        );
    }
}