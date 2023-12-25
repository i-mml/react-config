import { EditUserFields } from "../../types/api/user";
import axiosInstance from "../axiosConfig";

export const getSingleUser = async () => {
  const response = await axiosInstance
    .get("/user")
    .then((res) => res?.data?.data);

  return response;
};

export const putUserUpdate = async (e: EditUserFields) => {
  const response = await axiosInstance
    .put("/user/update", e)
    .then((res) => res?.data);

  return response;
};
