import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entity";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../errors/appError";
import { IPropertyRequest } from "../../interfaces/properties";

const createPropertyService = async ({ value, size, address, categoryId }: IPropertyRequest): Promise<Properties> => {
  const categoryRepository = AppDataSource.getRepository(Categories);
  const propertyRepository = AppDataSource.getRepository(Properties);
  const addressRepository = AppDataSource.getRepository(Addresses);

  const category = await categoryRepository.findOneBy({
    id: categoryId
  });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  const newAddress = await addressRepository.save(address);

  const property = propertyRepository.create({
    value,
    size,
    address: newAddress,
    category: category
  });

  await propertyRepository.save(property);


  return property;
}

export default createPropertyService;