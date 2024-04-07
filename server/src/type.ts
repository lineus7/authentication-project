export interface ErrorHandler {
  statusCode: number;
  message: string;
}

export interface RegisterInput {
  email: string;
  password: string;
  phoneNumber: string;
}

export interface LoginInput {
  email: string;
  password: string;
}
