import "reflect-metadata";
import "express-async-errors";
import express from "express";
import userRoutes from "./routes/user.routes";
import sessionRoutes from "./routes/session.routes";
import categoryRoutes from "./routes/categories.routes";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import propertyRoutes from "./routes/properties.routes";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/categories", categoryRoutes);
app.use("/properties", propertyRoutes);

app.use(handleErrorMiddleware);

export default app;