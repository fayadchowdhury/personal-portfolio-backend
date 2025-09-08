import { Router } from "express";
import { validateRequestBodyWithZod } from "../middleware";
import { getAllProjects, getProjectsByTopics } from "../controllers";
import { projectTopicRrequestSchema } from "../schemas";

const projectsRouter: Router = Router();

projectsRouter.get("/getAll", getAllProjects);
projectsRouter.post("/getByTopics", validateRequestBodyWithZod(projectTopicRrequestSchema), getProjectsByTopics);

export default projectsRouter;