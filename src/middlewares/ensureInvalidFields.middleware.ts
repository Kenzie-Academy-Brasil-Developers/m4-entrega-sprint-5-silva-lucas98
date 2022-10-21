import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";

const ensureInvalidFieldsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body;

    if (user.isAdm !== undefined) {
        throw new AppError ("isAdm cannot be changed", 401);
    }

    if (user.isActive !== undefined) {
        throw new AppError ("isActive cannot be changed", 401);
    }

    if (user.id !== undefined) {
        throw new AppError ("id cannot be changed", 401);
    }

    return next();
}

export default ensureInvalidFieldsMiddleware;