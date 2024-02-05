import axiosInstance from "../axiosConfig";

export const getDeviceAll = async () => {
  const response = await axiosInstance
    .get("/device/all")
    .then((res) => res?.data?.data);

  return response;
};

export const getDeviceByDeviceId = async (id: number, tags: string) => {
  const response = await axiosInstance
    .get(`/device?device_id=${id}&tag=${tags}`)
    .then((res) => res?.data);

  return response;
};

export const getDeviceSystemInformation = async (objid: number) => {
  const response = await axiosInstance.get(
    `/device/system/information?device_id=${objid}`
  );

  return response;
};
