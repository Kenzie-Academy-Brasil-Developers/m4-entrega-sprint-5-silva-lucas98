import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express-serve-static-core";
import listUsersService from "../../services/users/listUsers.service";

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();

  return res.json(instanceToPlain(users));
}

export default listUsersController;