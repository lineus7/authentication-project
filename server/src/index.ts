import "dotenv/config";
import express from "express";
import { LoginInput, RegisterInput } from "./type";
import { errorHandler } from "./util/errorHandler";
import { UserController } from "./controller/user-controller";

const app = express();
const port = process.env.EXPRESS_PORT || 3000;

app.use(express.json());

app.post("/register", async (req, res) => {
  try {
    const body: RegisterInput = req.body;
    const user = await UserController.createUser(body);

    res.status(201).json(user);
  } catch (error) {
    const { statusCode, message } = errorHandler(error);
    res.status(statusCode).json({ error: message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const body: LoginInput = req.body;
    const user = await UserController.verifyUser(body);

    res.status(200).json(user);
  } catch (error) {
    const { statusCode, message } = errorHandler(error);
    res.status(statusCode).json({ error: message });
  }
});

app.post("/logout", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
