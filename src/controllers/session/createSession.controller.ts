import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/users";
import createSessionService from "../../services/session/createSession.service";

const createSessionController = async (req: Request, res: Response) => {
  const user: IUserLogin = req.body;
  const token = await createSessionService(user);

  return res.json({ token });
}

export default createSessionController;