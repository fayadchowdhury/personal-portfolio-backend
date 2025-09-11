import { Request, Response } from "express";
import { Skill } from "../models";

export async function getAllSkills(req: Request, res: Response) {
    try {
        const skills = await Skill.findAll();
        if (skills)
        {
            res.status(200).json(
                {
                    "skills": skills
                }
            );
        }
    }
    catch (err: unknown) {
        console.log(`Error occurred when retrieving all skills: ${err}`);
        res.status(500).json(
            {
                "message": `Failed to retrieve skills. ${err}`
            }
        );
    }
};