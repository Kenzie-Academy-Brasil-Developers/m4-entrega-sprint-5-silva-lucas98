import { Request, Response } from "express";
import deleteUserService from "../../services/users/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const connectedUser: any = req.user;

    await deleteUserService(id, connectedUser);

    return res.status(204).send();
}
 
export default deleteUserController; 