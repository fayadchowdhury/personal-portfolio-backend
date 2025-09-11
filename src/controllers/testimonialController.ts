import { Request, Response } from "express";
import { Testimonial } from "../models";

export async function getAllTestimonials(req: Request, res: Response) {
    try {
        const testimonials = await Testimonial.findAll();
        if (testimonials)
        {
            res.status(200).json(
                {
                    "testimonials": testimonials
                }
            );
        }
    }
    catch (err: unknown) {
        console.log(`Error occurred when retrieving all testimonials: ${err}`);
        res.status(500).json(
            {
                "message": `Failed to retrieve testimonials. ${err}`
            }
        );
    }
};