import axiosInstance from "../axiosConfig";

export const getSubscription = async () => {
  const response = await axiosInstance
    .get("/subscription")
    .then((res) => res?.data);

  return response;
};
