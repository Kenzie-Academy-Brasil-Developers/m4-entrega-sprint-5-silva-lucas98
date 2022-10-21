import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const deleteUserService = async (id: string, connectedUser: any): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({
    id
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  if (connectedUser.isAdm === false && connectedUser.id !== id) {
    throw new AppError("User is not admin", 401);
  }

  await userRepository.update(
    id,
    {
      isActive: false
    }
  );
}

export default deleteUserService;