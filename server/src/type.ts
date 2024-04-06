export interface ErrorHandler {
  statusCode: number;
  message: string | any[];
}

export interface RegisterInput {
  username: string;
  password: string;
  phoneNumber: string;
}

export interface LoginInput {
  username: string;
  password: string;
}
