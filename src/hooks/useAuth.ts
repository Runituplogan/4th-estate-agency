"use client";
import { useAuthState } from "@/store/authStore";
import AuthService, {
  EmailVerificationResponse,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  LoginRequest,
  LoginResponse,
  LogoutResponse,
  RegisterRequest,
  ResendEmailVerificationRequest,
  ResendEmailVerificationResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
} from "@/service/authService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const router = useRouter();
  const { setUser, setToken, user, token, clearAuth, setRefreshToken } =
    useAuthState();
  const queryClient = useQueryClient();

  const SignUpMutation = () => {
    return useMutation({
      mutationFn: async (user: RegisterRequest) => {
        const reponse = await AuthService.register(user);
        return reponse?.data;
      },
      onError: (error: AxiosError<{ message?: string }>) => {
        const messages = error.response?.data?.message;
        if (messages) {
          if (Array.isArray(messages)) {
            messages.forEach((msg) => toast.error(msg));
          } else {
            toast.error(messages, {
              style: { background: "#F8B3B3", border: "none" },
            });
          }
        } else {
          toast.error("An unexpected error occurred", {
            style: { background: "#F8B3B3", border: "none" },
          });
        }
      },
      onSuccess: (data) => {
        const { message, status } = data;
        toast.success(message, {
          style: { background: "#C8F8E2", border: "none" },
        });
        return { message, status };
      },
    });
  };

  const loginMutation = useMutation({
    mutationFn: async (user: LoginRequest) => {
      const response = await AuthService.login(user);
      return response?.data;
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      const messages = error.response?.data?.message;
      if (messages) {
        if (Array.isArray(messages)) {
          messages.forEach((msg) => toast.error(msg));
        } else {
          toast.error(messages, {
            style: { background: "#F8B3B3", border: "none" },
          });
        }
      } else {
        toast.error("An unexpected error occurred", {
          style: { background: "#F8B3B3", border: "none" },
        });
      }
    },
    onSuccess: (data: LoginResponse) => {
      const { message, data: responseData, status } = data;
      if (status === "Success") {
        clearAuth();
        setUser(responseData);
        setToken(responseData.accessToken);
        setRefreshToken(responseData.refreshToken);
        localStorage.setItem("email", responseData.email);
        document.cookie =
          "isAuthenticated=true; path=/; max-age=604800; SameSite=Lax";
        toast.success(message, {
          style: { background: "#C8F8E2", border: "none" },
        });
      }
    },
  });

  const useEmailVerification = (token: string, userId: string) => {
    return useQuery<EmailVerificationResponse>({
      queryKey: ["email-verification", token, userId],
      queryFn: async () => {
        const response = await AuthService.emailVerification(token, userId);
        return response.data;
      },
      enabled: false,
      retry: false,
    });
  };

  const useResendEmailVerificationMutation = useMutation({
    mutationFn: async (data: ResendEmailVerificationRequest) => {
      const reponse = await AuthService.resendEmailVerification(data);
      return reponse.data;
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const messages = error.response?.data?.message;
      if (messages) {
        if (Array.isArray(messages)) {
          messages.forEach((msg) => toast.error(msg));
        } else {
          toast.error(messages, {
            style: { background: "#F8B3B3", border: "none" },
          });
        }
      } else {
        toast.error("An unexpected error occurred", {
          style: { background: "#F8B3B3", border: "none" },
        });
      }
    },
    onSuccess: (response: ResendEmailVerificationResponse) => {
      const { data } = response;
      toast.success(data.message, {
        style: { background: "#C8F8E2", border: "none" },
      });
    },
  });

  const useForgotPasswordMutation = useMutation({
    mutationFn: async (email: ForgotPasswordRequest) => {
      const reponse = await AuthService.forgotPassword(email);
      return reponse.data;
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const messages = error.response?.data?.message;
      if (messages) {
        if (Array.isArray(messages)) {
          messages.forEach((msg) => toast.error(msg));
        } else {
          toast.error(messages, {
            style: { background: "#F8B3B3", border: "none" },
          });
        }
      } else {
        toast.error("An unexpected error occurred", {
          style: { background: "#F8B3B3", border: "none" },
        });
      }
    },
    onSuccess: (data: ForgotPasswordResponse) => {
      const { message, status } = data;
      toast.success(message, {
        style: { background: "#C8F8E2", border: "none" },
      });
    },
  });

  const useResetPasswordMutation = useMutation({
    mutationFn: async ({
      data,
      token,
    }: {
      data: ResetPasswordRequest;
      token: string;
    }) => {
      const response = await AuthService.resetPassword(data, token);
      return response.data;
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const messages = error.response?.data?.message;
      if (messages) {
        if (Array.isArray(messages)) {
          messages.forEach((msg) => toast.error(msg));
        } else {
          toast.error(messages, {
            style: { background: "#F8B3B3", border: "none" },
          });
        }
      } else {
        toast.error("An unexpected error occurred", {
          style: { background: "#F8B3B3", border: "none" },
        });
      }
    },
    onSuccess: (data: ResetPasswordResponse) => {
      const { message, status } = data;
      toast.success(message, {
        style: { background: "#C8F8E2", border: "none" },
      });
    },
  });

  const logOut = useMutation({
    mutationFn: async () => {
      const reponse = await AuthService.logout();
      return reponse.data;
    },
    onError: (error: AxiosError<{ message: string }>) => {
      clearAuth();
      localStorage.clear();
      document.cookie = "isAuthenticated=; path=/; max-age=0";
      router.replace("/login");
    },
    onSuccess: (data: LogoutResponse) => {
      clearAuth();
      localStorage.clear();
      document.cookie = "isAuthenticated=; path=/; max-age=0";
      router.replace("/login");
    },
  });

  return {
    SignUpMutation,
    loginMutation,
    useEmailVerification,
    useResendEmailVerificationMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
    logOut,
    user,
    token,
  };
};

export default useAuth;
