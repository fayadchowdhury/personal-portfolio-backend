import { Router } from "express";
import { validateRequestBodyWithZod } from "../middleware";
import { getAllProjects, getProjectsByTopics } from "../controllers";
import { projectTopicRequestSchema } from "../schemas";

const projectsRouter: Router = Router();

projectsRouter.get("/getAll", getAllProjects);
projectsRouter.post("/getByTopics", validateRequestBodyWithZod(projectTopicRequestSchema), getProjectsByTopics);

export default projectsRouter;