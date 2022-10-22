import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Categories } from "../entities/categories.entity";
import { AppError } from "../errors/appError";

const ensureCategoryAlreadyExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const name = req.body.name;
  const userRepository = AppDataSource.getRepository(Categories);
  const findCategory = await userRepository.findOneBy({
    name
  });

  if (findCategory) {
    throw new AppError("Category already exists");
  }

  return next();
}

export default ensureCategoryAlreadyExistsMiddleware;