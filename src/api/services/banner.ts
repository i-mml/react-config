import axiosInstance from "../axiosConfig";

export const getBannerAll = async () => {
  const response = await axiosInstance
    .get("/banner/all")
    .then((res) => res?.data?.data);

  return response;
};
export const getSingleBanner = async (e: number) => {
  const response = await axiosInstance.get(`/banner/${e}`);

  return response;
};

export const postBannerCreate = async (e: any) => {
  const response = await axiosInstance.post("/banner/create", e);

  return response;
};

export const putBannerEdit = async (e: any) => {
  const response = await axiosInstance.put("banner/edit", e);
  return response;
};

export const pathDeactiveBanner = async (bannerId: number) => {
  const response = await axiosInstance.patch(`/banner/active?id=${bannerId}`);

  return response;
};
