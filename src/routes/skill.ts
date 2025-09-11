import { Router } from "express";
import { getAllSkills, getSkillsByType } from "../controllers";
import { skillTypeRequestSchema } from "../schemas/skillSchemas";
import { validateRequestBodyWithZod } from "../middleware";

const skillRouter: Router = Router();

skillRouter.get("/getAll", getAllSkills);
skillRouter.post("/getByType", validateRequestBodyWithZod(skillTypeRequestSchema), getSkillsByType);

export default skillRouter;