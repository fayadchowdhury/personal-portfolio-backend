import { Router } from "express";
import healthRouter from "./health";
import mailerRouter from "./mailer";
import projectsRouter from "./projects";

const router: Router = Router();

router.use("/health", healthRouter);
router.use("/mail", mailerRouter);
router.use("/projects", projectsRouter);

export default router;