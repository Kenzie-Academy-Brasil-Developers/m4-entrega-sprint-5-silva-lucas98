import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { SchedulesUserProperties } from "../../entities/schedules_user_properties.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const listPropertySchedulesService = async (id: string): Promise<SchedulesUserProperties[]> => {
  const userRepository = AppDataSource.getRepository(User);
  const propertiesRepository = AppDataSource.getRepository(Properties);
  const schedulesRepository = AppDataSource.getRepository(SchedulesUserProperties);

  const property = await propertiesRepository.findOneBy({
    id
  });

  if (!property) {
    throw new AppError("Property not found", 404);
  }

  const schedules = await schedulesRepository.find({
    where: {
      property: {
        id: property.id
      }
    },
    relations: {
      user: true
    }
  });

  if (!schedules) {
    throw new AppError("Schedules not found", 404);
  }

  return schedules;
}

export default listPropertySchedulesService;