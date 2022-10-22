import { Request, Response } from "express-serve-static-core";
import listPropertiesInCategoryService from "../../services/categories/listPropertiesInCategory.service";

const listPropertiesInCategoryController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const properties = await listPropertiesInCategoryService(id);

  return res.send(properties);
}

export default listPropertiesInCategoryController;