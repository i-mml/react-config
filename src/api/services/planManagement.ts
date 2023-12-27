import axiosInstance from "../axiosConfig";

export const getPlanManagementById = async (id: number) => {
  const response = await axiosInstance
    .get(`/plan_management/all?plan_id=${id}`)
    .then((res) => res?.data?.data);

  return response;
};
