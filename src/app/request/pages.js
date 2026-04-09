import axiosInstance from "./axios";

export const getPages = () => {
  const { data } = axiosInstance.get(`/pages`);
  return data;
};
