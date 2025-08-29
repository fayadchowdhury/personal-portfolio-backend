import { Request, Response } from "express";
const os = require("os");

export function healthCheck(req: Request, res: Response) {
    res.json(
        {
            "status": "Healthy",
            "hostname": os.hostname()
        }
    );
};