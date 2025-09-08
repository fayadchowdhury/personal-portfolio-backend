import { Request, Response } from "express";
import { Project } from "../models";
import { Op } from "sequelize";
import { ProjectTopicRequestSchema, projectTopicRrequestSchema } from "../schemas";

export async function getAllProjects(req: Request, res: Response) {
    try {
        const projects = await Project.findAll();
        if (projects)
        {
            res.status(200).json(
                {
                    "projects": projects
                }
            )
        }
    }
    catch (err: unknown) {
        console.log(`Error occurred when retrieving all projects: ${err}`);
        res.status(500).json(
            {
                "message": `Failed to retrieve projects. ${err}`
            }
        )
    }
};

export async function getProjectsByTopics(req: Request<{}, {}, ProjectTopicRequestSchema>, res: Response) {
    try {
        const topics: string[] = req.body.topics;
        console.log("topics isArray?", Array.isArray(topics), "value:", topics);
        const projects = await Project.findAll(
            {
                where: {
                    topics: {
                        [Op.overlap]: topics
                    }
                }
            }
        );
        if (projects)
        {
            res.status(200).json(
                {
                    "projects": projects
                }
            )
        }
    }
    catch (err: unknown) {
        console.log(`Error occurred when retrieving projects by topic: ${err}`);
        res.status(500).json(
            {
                "message": `Failed to retrieve projects by topic. ${err}`
            }
        )
    }
};