import "dotenv/config";
import express from "express";
import { PrismaClient } from "@prisma/client";
import { RegisterInput } from "./type";

const prisma = new PrismaClient();
const app = express();
const port = process.env.EXPRESS_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/register", (req, res) => {
  const body = req.body;
  console.log(body);

  res.send("Hello World!");
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
