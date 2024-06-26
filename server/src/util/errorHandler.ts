import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { ZodError } from "zod";
import { ErrorHandler } from "../type";

export const errorHandler = (error: unknown) => {
  console.log(error);

  const errorStatus: ErrorHandler = {
    statusCode: 500,
    message: "Internal server error",
  };

  //Prisma Error
  if (error instanceof PrismaClientKnownRequestError) {
    //Unique Constraint
    if (error.code === "P2002" && error.meta && "target" in error.meta) {
      errorStatus.statusCode = 400;
      const target = error.meta.target as string[];
      if (target[0] === "email") {
        errorStatus.message = "Email already registered";
      }
      if (target[0] === "phone_number") {
        errorStatus.message = "Phone number already registered";
      }
    }
  }

  //Validation Error
  if (error instanceof ZodError) {
    errorStatus.statusCode = 400;
    errorStatus.message = error.issues[0].message;
  }

  //Custom Error
  if (error instanceof Error) {
    if (error.message === "invalid login") {
      errorStatus.statusCode = 404;
      errorStatus.message = "Invalid Email/Password";
    }
  }

  return errorStatus;
};
