import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";

const listPropertiesInCategoryService = async (id: string): Promise<Properties[]> => {
  const categoryRepository = AppDataSource.getRepository(Categories);
  const propertiesRepository = AppDataSource.getRepository(Properties);

  const category = await categoryRepository.findOneBy({
    id
  });
  
  const properties = await propertiesRepository.findBy({
    category: category!
  });

  return properties;
}

export default listPropertiesInCategoryService;