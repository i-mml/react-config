import axiosInstance from "../axiosConfig";

export const getBannerAll = async () => {
  const response = await axiosInstance
    .get("/banner/all")
    .then((res) => res?.data?.data);

  return response;
};

export const postBannerCreate = async (e: any) => {
  const response = await axiosInstance.post("/banner/create", e);

  return response;
};
