import axiosInstance from "../axiosConfig";

export const getDeviceAll = async () => {
  const response = await axiosInstance
    .get("/device/all")
    .then((res) => res?.data?.data);

  return response;
};
