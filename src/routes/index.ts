import { Router } from "express";
import healthRouter from "./health";
import mailerRouter from "./mailer";

const router: Router = Router();

router.use("/health", healthRouter);
router.use("/mail", mailerRouter);

export default router;