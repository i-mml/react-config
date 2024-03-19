import { CameraCreateFields, CameraEditFields } from "../../types/api/camera";
import { CreatePlanFields, PlanEditFields } from "../../types/api/plan";
import axiosInstance from "../axiosConfig";

export const getPlanAll = async (companyId: any) => {
  const response = await axiosInstance
    .get(`/plan/all/${companyId}`)
    .then((res) => res?.data?.data);

  return response;
};

export const putPlanEdit = async (e: PlanEditFields) => {
  const response = await axiosInstance
    .put("/plan/edit", e)
    .then((res) => res?.data);

  return response;
};

export const postPlanCreate = async (e: CreatePlanFields) => {
  const response = await axiosInstance
    .post("/plan/create", e)
    .then((res) => res?.data);

  return response;
};

export const patchPlanActive = async (planId: any) => {
  const response = await axiosInstance
    .patch(`/plan/active?id=${planId}`)
    .then((res) => res?.data?.data);

  return response;
};
