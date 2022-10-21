import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUserUpdate } from "../../interfaces/users";
import { hash } from "bcrypt";

const updateUserService = async (id: string, connectedUser: any, {name, email, password}: IUserUpdate): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({
    id
  });

  if(!findUser) {
    throw new AppError ("User not found", 404);
  }

  if(connectedUser.isAdm === false && connectedUser.id !== id) {
    throw new AppError("User is not admin", 401);
  }

  await userRepository.update(
    id,
    {
      name: name ? name : findUser.name,
      email: email ? email : findUser.email,
      password: password ? await hash(password, 10) : findUser.password
    }
  );

  const user = await userRepository.findOneBy({
    id
  });

  return user!;
}

export default updateUserService;