import axiosInstance from "./axios";

export async function getDynamicPageData(slug: string): Promise<any> {
  try {
    const response = await axiosInstance.get(`/pages/${slug}`);
    return response.data;
  } catch (error) {
    return {
      title: "Error",
      description: "Could not load data",
      image: "error.jpg",
    };
  }
}
