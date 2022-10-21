import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/appError";

const ensureEmailAlreadyExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const email = req.body.email;
  const userRepository = AppDataSource.getRepository(User);
  const findEmail = await userRepository.findOneBy({
    email
  });

  if (findEmail) {
    throw new AppError("Email already exists");
  }

  return next();
}

export default ensureEmailAlreadyExistsMiddleware;