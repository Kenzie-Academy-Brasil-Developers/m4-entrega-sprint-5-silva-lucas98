import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import listUsersController from "../controllers/users/listUsers.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureEmailAlreadyExistsMiddleware from "../middlewares/ensureEmailAlreadyExists.middleware";
import ensureInvalidFieldsMiddleware from "../middlewares/ensureInvalidFields.middleware";
import ensureIsActiveMiddleware from "../middlewares/ensureIsActive.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";

const userRoutes = Router();

userRoutes.post("", ensureEmailAlreadyExistsMiddleware, createUserController);
userRoutes.get("", ensureAuthMiddleware, ensureIsAdmMiddleware, listUsersController);
userRoutes.patch("/:id", ensureAuthMiddleware, ensureInvalidFieldsMiddleware, updateUserController);
userRoutes.delete("/:id", ensureAuthMiddleware, ensureIsAdmMiddleware, ensureIsActiveMiddleware, deleteUserController);

export default userRoutes;