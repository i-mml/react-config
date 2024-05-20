import axiosInstance from "../axiosConfig";

export const postAdminRegister = async (e: any) => {
  const response = await axiosInstance
    .post("/admin/register", e)
    .then((res) => res?.data);

  return response;
};
export const postUserRegister = async (e: any) => {
  const response = await axiosInstance
    .post("/user/register", e)
    .then((res) => res?.data);

  return response;
};
