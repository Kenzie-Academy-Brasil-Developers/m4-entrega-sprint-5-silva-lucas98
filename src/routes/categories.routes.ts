import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller";
import listCategoriesController from "../controllers/categories/listCategories.controller";
import listPropertiesInCategoryController from "../controllers/categories/listPropertiesInCategory.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureCategoryAlreadyExistsMiddleware from "../middlewares/ensureCategoryAlreadyExists.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";

const categoryRoutes = Router();

categoryRoutes.post("", ensureAuthMiddleware, ensureIsAdmMiddleware, ensureCategoryAlreadyExistsMiddleware, createCategoryController);
categoryRoutes.get("", listCategoriesController);
categoryRoutes.get("/:id/properties", listPropertiesInCategoryController);

export default categoryRoutes;