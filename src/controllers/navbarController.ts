import { Request, Response } from "express";
import { redisClient } from "../config";

export async function getNavbarData(req: Request, res: Response) {
    try {
        const leader = await redisClient.json.get("navbarLeader");
        const links = await redisClient.json.get("navbarLinks");
        if (leader && links) {
            res.status(200).json(
                {
                    "navbar" : {
                        "leader": leader,
                        "links": links
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
        console.log(`Error getting navbar data: ${err}`);
        res.status(500).json(
            {
                "message": `Error getting navbar data: ${err}`
            }
        );
    }
}