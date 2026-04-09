import axios from "axios";
 
export const baseURL = "https://api.4eagency.ourtestingdomain.site/api/v1";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
}); 

axiosInstance.interceptors.response.use(
  (response) => {
    // Return only the data from the respondse
    return response.data;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/signin";
    }
    
    return Promise.reject({
      message: error.response?.data?.message || "An error occurred",
      status: error.response?.status,
      data: error.response?.data
    });
  }
);

export default axiosInstance;