import { Timestamp } from "typeorm";
import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { SchedulesUserProperties } from "../../entities/schedules_user_properties.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IScheduleRequest } from "../../interfaces/schedules";

const createSchedulesService = async ({ date, hour, propertyId }: IScheduleRequest, connectedUser: any): Promise<SchedulesUserProperties> => {
  const schedulesRepository = AppDataSource.getRepository(SchedulesUserProperties);
  const propertyRepository = AppDataSource.getRepository(Properties);
  const userRepository = AppDataSource.getRepository(User);

  const findSchedulesInDate = await schedulesRepository.findBy({
    date
  });
  const property = await propertyRepository.findOneBy({
    id: propertyId
  });

  if (!property) {
    throw new AppError("Property not found", 404);
  }

  if (findSchedulesInDate) {
    const isNotAvailable = findSchedulesInDate.some(schedule => schedule.hour.includes(hour));

    if (isNotAvailable) {
      throw new AppError("Unavailable time");
    }
  }

  const time = hour.split(":");
  const timeHour = Number(time[0]);
  const timeMinute = Number(time[1]);

  if (timeHour < 8 || (timeHour >= 18 && timeMinute > 0)) {
    throw new AppError("Unavailable time");
  }

  const scheduleDay = new Date(date).getDay()

  if (scheduleDay === 0 || scheduleDay === 6) {
    throw new AppError("Unavilable day");
  }

  const user = await userRepository.findOneBy({
    id: connectedUser.id
  });

  const schedule = schedulesRepository.create({
    date,
    hour,
    property,
    user: user!
  });

  await schedulesRepository.save(schedule);

  return schedule;
}

export default createSchedulesService;