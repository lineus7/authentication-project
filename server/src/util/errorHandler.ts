import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { ZodError } from "zod";

export const errorHandler = (error: unknown) => {
  console.log(error);

  const errorStatus = {
    statusCode: 500,
    message: "Internal server error",
  };

  //Prisma Error
  if (error instanceof PrismaClientKnownRequestError) {
    //Unique Constraint
    if (error.code === "P2002" && error.meta) {
      errorStatus.statusCode = 400;
      if (error.meta.target === "username") {
        errorStatus.message = "Username already registered";
      }
      if (error.meta.target === "phoneNumber") {
        errorStatus.message = "Phone number already registered";
      }
    }
  }

  //Validation Error
  if (error instanceof ZodError) {
    errorStatus.statusCode = 400;
    errorStatus.message = error.issues[0].message;
  }

  return errorStatus;
};
