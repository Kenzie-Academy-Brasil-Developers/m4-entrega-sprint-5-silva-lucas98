import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/users";
import { hash } from "bcrypt";

const createUserService = async ({ name, email, password, isAdm }: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const hashedPassword = await hash(password, 10);
  const user = userRepository.create({
    name,
    email,
    password: hashedPassword,
    isAdm
  });

  await userRepository.save(user);

  return user;
}

export default createUserService;