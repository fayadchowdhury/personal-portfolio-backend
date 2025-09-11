import { Request, Response } from "express";
import { redisClient } from "../config";

export async function getIntroData(req: Request, res: Response) {
    try {
        const intro = await redisClient.get("intro");
        if (intro) {
            res.status(200).json(
                {
                    "intro": intro
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
        console.log(`Error getting intro data: ${err}`);
        res.status(500).json(
            {
                "message": `Error getting intro data: ${err}`
            }
        );
    }
}