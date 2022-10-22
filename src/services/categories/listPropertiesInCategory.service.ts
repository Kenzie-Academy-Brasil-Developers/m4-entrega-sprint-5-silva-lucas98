import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../errors/appError";

const listPropertiesInCategoryService = async (id: string): Promise<Array<string | Properties[]>> => {
  const categoryRepository = AppDataSource.getRepository(Categories);
  const propertiesRepository = AppDataSource.getRepository(Properties);

  const category = await categoryRepository.findOneBy({
    id
  });

  if(!category) {
    throw new AppError("Category not found", 404);
  }

  const name: string = category?.name!;
  
  const properties = await propertiesRepository.findBy({
    category: category!
  });

  return [name, properties];
}

export default listPropertiesInCategoryService;