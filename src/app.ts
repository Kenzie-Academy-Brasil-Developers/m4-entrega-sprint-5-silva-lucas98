import "reflect-metadata";
import "express-async-errors";
import express from "express";
import userRoutes from "./routes/userRoutes";
import sessionRoutes from "./routes/sessionRoutes";
import handleErrorMiddleware from "./middlewares/handleError.middleware";

const app = express()
app.use(express.json())
app.use("/users", userRoutes);
app.use("/login", sessionRoutes);

app.use(handleErrorMiddleware);

export default app;