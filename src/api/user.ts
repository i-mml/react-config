import axiosInstance from "./axiosConfig";

export const getSingleUser = async () => {
  const response = await axiosInstance
    .get("/user")
    .then((res) => res?.data?.data);

  return response;
};
