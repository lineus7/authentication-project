import { LoginInput, RegisterInput } from "../type";
import prisma from "../util/prisma";
import { loginSchema, registerSchema } from "../util/zod";

export class UserController {
  static async createUser(body: RegisterInput) {
    registerSchema.parse(body); //Validation

    //Create Data
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

    return user;
  }
  static async verifyUser(body: LoginInput) {
    loginSchema.parse(body); //Validation

    const user = await prisma.user.findFirst({
      where: { username: body.username },
    });
    if (!user) throw new Error("user not found");

    return user;
  }
}
