import { Request, Response } from "express";
import { Work } from "../models";

export async function getAllWorks(req: Request, res: Response) {
    try {
        const works = await Work.findAll();
        if (works)
        {
            res.status(200).json(
                {
                    "works": works
                }
            );
        }
    }
    catch (err: unknown) {
        console.log(`Error occurred when retrieving all works: ${err}`);
        res.status(500).json(
            {
                "message": `Failed to retrieve works. ${err}`
            }
        );
    }
};