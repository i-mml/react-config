import axiosInstance from "../axiosConfig";

export const getNotifications = async () => {
  const response = await axiosInstance
    .get("/notifications")
    .then((res) => res?.data?.data);

  return response;
};
