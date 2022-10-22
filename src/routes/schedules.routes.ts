import { Router } from "express";
import createSchedulesController from "../controllers/schedules/createSchedules.controller";
import listPropertySchedulesController from "../controllers/schedules/listPropertySchedules.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";

const schedulesRoutes = Router();

schedulesRoutes.post("", ensureAuthMiddleware, createSchedulesController);
schedulesRoutes.get("/properties/:id", ensureAuthMiddleware, ensureIsAdmMiddleware, listPropertySchedulesController);

export default schedulesRoutes;