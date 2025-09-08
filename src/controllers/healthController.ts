import { Request, Response } from "express";
import os from "os";

export function healthCheck(req: Request, res: Response) {
    res.json(
        {
            "status": "Healthy",
            "hostname": os.hostname()
        }
    );
};