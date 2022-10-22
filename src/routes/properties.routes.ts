import { Router } from "express";
import createPropertyController from "../controllers/properties/createProperty.controller";
import listPropertiesController from "../controllers/properties/listProperties.controller";
import ensureAddressAlreadyExistsMiddleware from "../middlewares/ensureAddressAlreadyExists.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";

const propertyRoutes = Router();

propertyRoutes.post("", ensureAuthMiddleware, ensureIsAdmMiddleware, ensureAddressAlreadyExistsMiddleware, createPropertyController);
propertyRoutes.get("", listPropertiesController);

export default propertyRoutes;