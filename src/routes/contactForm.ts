import { Router } from "express";
import { getContactFormData } from "../controllers";

const contactFormRouter: Router = Router();

contactFormRouter.get("/getData", getContactFormData);

export default contactFormRouter;