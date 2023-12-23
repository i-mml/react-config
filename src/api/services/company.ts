import {
  CompanyCreateFields,
  CompanyEditFields,
} from "../../types/api/company";
import axiosInstance from "../axiosConfig";

export const postCompanyCreate = async (e: CompanyCreateFields) => {
  const response = await axiosInstance
    .post("/company/create", e)
    .then((res) => res?.data);

  return response;
};

export const putCompanyEdit = async (e: CompanyEditFields) => {
  const response = await axiosInstance
    .put("/company/edit", e)
    .then((res) => res?.data);

  return response;
};

export const getCompanyAll = async () => {
  const response = await axiosInstance
    .get("/company/all")
    .then((res) => res?.data);

  return response;
};

export const getCompanyById = async (id: number) => {
  const response = await axiosInstance
    .get(`/company/${id}`)
    .then((res) => res?.data);

  return response;
};
