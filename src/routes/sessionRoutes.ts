import { Router } from "express";
import createSessionController from "../controllers/session/createSession.controller";
import ensureIsActiveMiddleware from "../middlewares/ensureIsActive.middleware";

const sessionRoutes = Router();

sessionRoutes.use("", ensureIsActiveMiddleware, createSessionController);

export default sessionRoutes;