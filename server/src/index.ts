import "dotenv/config";
import express from "express";
import { LoginInput, RegisterInput } from "./type";
import { errorHandler } from "./util/errorHandler";
import { UserController } from "./controller/user-controller";
import cors from "cors";

const app = express();
const port = process.env.EXPRESS_PORT || 3000;

app.use(cors());
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
    const token = await UserController.verifyUser(body);

    res.cookie("token", token, {
      maxAge: 86400000,
      httpOnly: true,
    });

    res.cookie("userLogin", body.email, {
      maxAge: 86400000,
    });

    res.status(200).json({ message: "Success Login" });
  } catch (error) {
    const { statusCode, message } = errorHandler(error);
    res.status(statusCode).json({ error: message });
  }
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.clearCookie("userLogin");
  res.status(200).json({ message: "Success Logout" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
