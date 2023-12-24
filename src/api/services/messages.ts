import {
  MessageCreateFields,
  MessageEditFields,
} from "../../types/api/message";
import axiosInstance from "../axiosConfig";

export const getMessageAll = async (params: string | undefined) => {
  const response = await axiosInstance
    .get(`/message/all?${params}`)
    .then((res) => res?.data);

  return response;
};

export const putMessageEdit = async (e: MessageEditFields) => {
  const response = await axiosInstance
    .put("/message/edit", e)
    .then((res) => res?.data);

  return response;
};

export const postMessageCreate = async (e: MessageCreateFields) => {
  const response = await axiosInstance
    .post("/message/send", e)
    .then((res) => res?.data);

  return response;
};
