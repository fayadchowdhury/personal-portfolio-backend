import { Router } from "express";
import { getAllTestimonials } from "../controllers";

const testimonialRouter: Router = Router();

testimonialRouter.get("/getAll", getAllTestimonials);

export default testimonialRouter;