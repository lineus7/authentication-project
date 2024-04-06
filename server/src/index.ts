import "dotenv/config";
import express from "express";
import { RegisterInput } from "./type";
import prisma from "./util/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const app = express();
const port = process.env.EXPRESS_PORT || 3000;

app.use(express.json());

app.post("/register", async (req, res) => {
  try {
    const body: RegisterInput = req.body;
    console.log(body);

    const user = await prisma.user.create({
      data: {
        username: body.username,
        password: body.password,
        phone_number: body.phoneNumber,
      },
      select: {
        username: true,
        phone_number: true,
      },
    });

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002" && error.meta) {
        res.status(400).json({ error: `${error.meta.target} must be unique` });
      }
    }
    res.json({ error: "Internal Server Error" });
  }
});

app.post("/login", (req, res) => {
  res.send("Hello World!");
});

app.post("/logout", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
