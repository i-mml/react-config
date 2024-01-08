import { TicketEditFields, TicketSendFields } from "../../types/api/ticket";
import axiosInstance from "../axiosConfig";

export const getTicketAll = async (internal: boolean) => {
  const response = await axiosInstance
    .get(`/ticket/all?internal=${internal}`)
    .then((res) => res?.data);

  return response;
};

export const postTicketSend = async (e: TicketSendFields) => {
  const response = await axiosInstance
    .post("/ticket/send", e)
    .then((res) => res?.data);

  return response;
};

export const putTicketEdit = async (e: TicketEditFields) => {
  const response = await axiosInstance
    .put("/ticket/edit", e)
    .then((res) => res?.data);

  return response;
};

export const getAcceptedTicket = async (e: string) => {
  const response = await axiosInstance
    .get(`/ticket/?${e}`)
    .then((res) => res?.data);

  return response;
};
