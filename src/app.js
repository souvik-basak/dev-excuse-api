import express from "express";
import cors from "cors";
import excuseRouter from "./routes/excuse.routes.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/excuse", excuseRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Dev Excuse API" });
});

export default app;