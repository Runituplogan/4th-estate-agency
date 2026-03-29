import axiosConfig from "@/config/axios";
import { SignupMode, UserStatus } from "@/helper";
import axios, { AxiosResponse } from "axios";

export interface RegisterRequest {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterResponse {
  status: string;
  statusCode: number;
  message: string;
  data: null;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  status: string;
  statusCode: number;
  message: string;
  data: {
    id: string;
    firstName: string;
    secondName: string;
    email: string;
    phoneNumber: string | null;
    googleId: string | null;
    status: UserStatus;
    verified: boolean;
    createdAt: Date;
    updatedAt: Date;
    signUpMode: SignupMode;
    accessToken: string;
    refreshToken: string;
  };
}

export interface EmailVerificationResponse {
  status: string;
  statusCode: number;
  data: {
    message: string;
  };
}

export interface ResendEmailVerificationRequest {
  email: string;
}

export interface ResendEmailVerificationResponse {
  status: string;
  statusCode: number;
  data: {
    message: string;
  };
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ForgotPasswordResponse {
  status: string;
  statusCode: string;
  message: string;
}

export interface ResetPasswordRequest {
  newPassword: string;
  confirmPassword: string;
}

export interface ResetPasswordResponse {
  status: string;
  statusCode: number;
  message: string;
}

export interface LogoutResponse {
  status: string;
  statusCode: number;
  message: string;
}

class AuthService {
  static register = async (
    requestBody: RegisterRequest,
  ): Promise<AxiosResponse<RegisterResponse>> => {
    return axiosConfig.post("auth/register", requestBody);
  };

  static login = async (
    requestBody: LoginRequest,
  ): Promise<AxiosResponse<LoginResponse>> => {
    return axiosConfig.post("auth/login", requestBody);
  };

  static emailVerification = async (
    token: string,
    userId: string,
  ): Promise<AxiosResponse<EmailVerificationResponse>> => {
    return axiosConfig.get("auth/verify-email", {
      params: {
        token,
        userId,
      },
    });
  };

  static resendEmailVerification = async (
    requestBody: ResendEmailVerificationRequest,
  ): Promise<AxiosResponse<ResendEmailVerificationResponse>> => {
    return axiosConfig.post("auth/resend-verification", requestBody);
  };

  static forgotPassword = async (
    requestBody: ForgotPasswordRequest,
  ): Promise<AxiosResponse<ForgotPasswordResponse>> => {
    return await axiosConfig.post("auth/forgot-password", requestBody);
  };

  static resetPassword = async (
    requestBody: ResetPasswordRequest,
    token: string,
  ): Promise<AxiosResponse<ResetPasswordResponse>> => {
    return await axiosConfig.post("auth/reset-password", requestBody, {
      params: {
        token,
      },
    });
  };

  static logout = async (): Promise<AxiosResponse<LogoutResponse>> => {
    return axiosConfig.post("auth/logout");
  };
}

export default AuthService;
