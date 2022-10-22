import { Request, Response } from "express";
import { ICategoryRequest } from "../../interfaces/categories";
import createCategoryService from "../../services/categories/createCategory.service";

const createCategoryController = async (req: Request, res: Response) => {
  const { name }: ICategoryRequest = req.body;
  const category = await createCategoryService({ name });

  return res.status(201).send(category);
}

export default createCategoryController;