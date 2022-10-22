import { Request, Response } from "express-serve-static-core";
import listPropertiesInCategoryService from "../../services/categories/listPropertiesInCategory.service";

const listPropertiesInCategoryController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const data = await listPropertiesInCategoryService(id);

  return res.json({
    id: id,
    name: data[0],
    properties: data[1]
  });
}

export default listPropertiesInCategoryController;