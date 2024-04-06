import { PrismaClient } from "@prisma/client";
import { hashPassword } from "./hash";

const prisma = new PrismaClient({ log: ["query"] });

prisma.$use(async (params, next) => {
  if (
    params.model === "User" &&
    params.action === "create" &&
    params.args.data
  ) {
    const password = params.args.data.password;
    params.args.data.password = hashPassword(password);
  }
  return next(params);
});

export default prisma;
