import { CameraCreateFields, CameraEditFields } from "../../types/api/camera";
import axiosInstance from "../axiosConfig";

export const getCameraAll = async () => {
  const response = await axiosInstance
    .get("/camera/all")
    .then((res) => res?.data?.data);

  return response;
};

export const putCompanyEdit = async (e: CameraEditFields) => {
  const response = await axiosInstance
    .put("/camera/edit", e)
    .then((res) => res?.data);

  return response;
};

export const postCameraCreate = async (e: CameraCreateFields) => {
  const response = await axiosInstance
    .post("/company/create", e)
    .then((res) => res?.data);

  return response;
};
