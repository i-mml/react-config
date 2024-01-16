import axiosInstance from "../axiosConfig";

export const getPlanManagementById = async (id: number) => {
  const response = await axiosInstance
    .get(`/plan_management/all?plan_id=${id}`)
    .then((res) => res?.data?.data);

  return response;
};

export const postPlanManagementCreate = async (e: any) => {
  const response = await axiosInstance
    .post(`/plan_management/create`, e)
    .then((res) => res?.data?.data)
    .catch((err) => console.log(err));

  return response;
};

export const deletePlanManagementByDeviceId = async (deviceId: number) => {
  const response = await axiosInstance.delete(
    `/plan_management/delete?device_id=${deviceId}`
  );

  return response;
};
