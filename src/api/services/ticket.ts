import axiosInstance from "../axiosConfig";

export const getTicketAll = async () => {
  const response = await axiosInstance
    .get("/ticket/all")
    .then((res) => res?.data);

  return response;
};
