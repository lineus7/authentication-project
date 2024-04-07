import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email("Input must be email"),
  password: z.string().min(6, "Password must be 6 or more characters long"),
  phoneNumber: z
    .string()
    .regex(new RegExp("^\\+?[0-9\\-\\s]+$"), "Must be a valid phone number"),
});

export const loginSchema = z.object({
  email: z.string().email("Input must be email"),
  password: z.string().min(6, "Password must be 6 or more characters long"),
});
