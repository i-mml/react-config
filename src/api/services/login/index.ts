import axiosInstance from "../../axiosConfig";

export const PostLogin = (params: { number: string; password: string }) => {
  return axiosInstance.post("/login", params);
};
