import { Router } from "express";
import healthRouter from "./health";
import mailerRouter from "./mailer";
import projectsRouter from "./projects";
import contactFormRouter from "./contactForm";
import taglinesRouter from "./taglines";
import navbarRouter from "./navbar";
import introRouter from "./intro";
import socialsRouter from "./socials";
import nameRouter from "./name";

const router: Router = Router();

router.use("/health", healthRouter);
router.use("/mail", mailerRouter);
router.use("/projects", projectsRouter);
router.use("/contactForm", contactFormRouter);
router.use("/taglines", taglinesRouter);
router.use("/navbar", navbarRouter);
router.use("/intro", introRouter);
router.use("/socials", socialsRouter);
router.use("/name", nameRouter);

export default router;