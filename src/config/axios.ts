import axios from "axios";
import { useAuthState } from "@/store/authStore";

const axiosConfig = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const refreshClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  withCredentials: true,
});

axiosConfig.interceptors.request.use(
  (config) => {
    const token = useAuthState.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  },
  (error) => Promise.reject(error),
);

let isRefreshing = false;
let failedQueue: {
  resolve: (token: string) => void;
  reject: (err: unknown) => void;
}[] = [];

const processQueue = (error: unknown, token?: string) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else if (token) {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

const clearAndRedirect = () => {
  useAuthState.getState().clearAuth();
  localStorage.clear();
  document.cookie = "isAuthenticated=; path=/; max-age=0";
  if (
    typeof window !== "undefined" &&
    !window.location.pathname.includes("/")
  ) {
    window.location.replace("/");
  }
};

axiosConfig.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (originalRequest.url?.includes("auth/refresh-token")) {
      clearAndRedirect();
      return Promise.reject(error);
    }

    if (
      !error.response ||
      error.response.status !== 401 ||
      originalRequest._retry
    ) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      })
        .then((token) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return axiosConfig(originalRequest);
        })
        .catch((err) => Promise.reject(err));
    }

    isRefreshing = true;

    try {
      const storedRefreshToken = useAuthState.getState().refreshToken;
      console.log("Stored refresh token:", storedRefreshToken);

      const response = await refreshClient.post(
        "auth/refresh-token",
        { refreshToken: storedRefreshToken },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const {
        accessToken,
        refreshToken: newRefreshToken,
        ...user
      } = response.data.data;

      if (!accessToken) {
        throw new Error("No access token returned from refresh");
      }

      useAuthState.getState().setToken(accessToken);
      useAuthState.getState().setRefreshToken(newRefreshToken);
      useAuthState.getState().setUser(user);

      processQueue(null, accessToken);

      originalRequest.headers.Authorization = `Bearer ${accessToken}`;
      return axiosConfig(originalRequest);
    } catch (refreshError) {
      processQueue(refreshError, undefined);
      clearAndRedirect();
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  },
);

export default axiosConfig;
