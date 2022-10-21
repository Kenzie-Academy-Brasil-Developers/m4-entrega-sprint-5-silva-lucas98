import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/appError";

const ensureIsActiveMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const id: string = req.params.id;
  const email: string = req.body.email;
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({
    id, email
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  if (findUser.isActive == false) {
    throw new AppError("user not found");
  }

  return next();
}

export default ensureIsActiveMiddleware;