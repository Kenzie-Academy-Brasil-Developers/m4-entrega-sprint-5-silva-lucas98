import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IUserUpdate } from "../../interfaces/users";
import updateUserService from "../../services/users/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const connectedUser = req.user;
  const user: IUserUpdate = req.body;
  const updatedUser = await updateUserService(id, connectedUser, user);

  return res.json(instanceToPlain(updatedUser));
}

export default updateUserController;