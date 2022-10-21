import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";
import jwt from "jsonwebtoken";

const ensureAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers.authorization;

  if(!token) {
    throw new AppError("Invalid token", 401);
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
    if(error) {
      throw new AppError ("Invalid token", 401);
    }

    req.user = {
      isAdm: decoded.isAdm,
      id: decoded.sub
    }

    return next();
  });
}

export default ensureAuthMiddleware;