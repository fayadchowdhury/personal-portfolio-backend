import { Request, Response } from "express";
import { redisClient } from "../config";

export async function getNameData(req: Request, res: Response) {
    try {
        const name = await redisClient.get("name");
        if (name) {
            res.status(200).json(
                {
                    "name": name
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
        console.log(`Error getting name data: ${err}`);
        res.status(500).json(
            {
                "message": `Error getting name data: ${err}`
            }
        );
    }
}