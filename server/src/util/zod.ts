import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().min(4, "Username must be 4 or more characters long"),
  password: z.string().min(6, "Password must be 6 or more characters long"),
  phoneNumber: z
    .string()
    .regex(new RegExp("^\\+?[0-9\\-\\s]+$"), "Must be a valid phone number"),
});

export const loginSchema = z.object({
  username: z.string().min(4, "Username must be 4 or more characters long"),
  password: z.string().min(6, "Password must be 6 or more characters long"),
});
