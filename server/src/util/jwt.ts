import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET || "rahasia";
export const createToken = (payload: string | object) =>
  jwt.sign(payload, secret);
export const verifyToken = (token: string) => jwt.verify(token, secret);
