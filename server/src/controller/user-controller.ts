import { LoginInput, RegisterInput } from "../type";
import { verifyPassword } from "../util/hash";
import { createToken } from "../util/jwt";
import prisma from "../util/prisma";
import { loginSchema, registerSchema } from "../util/zod";

export class UserController {
  static async createUser(body: RegisterInput) {
    registerSchema.parse(body); //Validation

    //Create Data
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        phone_number: body.phoneNumber,
      },
      select: {
        email: true,
        phone_number: true,
      },
    });

    return user;
  }
  static async verifyUser(body: LoginInput) {
    loginSchema.parse(body); //Validation

    const user = await prisma.user.findFirst({
      where: { email: body.email },
      select: {
        id: true,
        email: true,
        password: true,
      },
    });
    if (!user) throw new Error("invalid login");
    const isVerified = verifyPassword(body.password, user.password);
    if (!isVerified) throw new Error("invalid login");

    const token = createToken({ id: user.id, username: user.email });
    return token;
  }
}
