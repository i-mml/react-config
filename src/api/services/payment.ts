import axiosInstance from "../axiosConfig";

export const postPaymentRequest = async (e: any) => {
  const response = await axiosInstance
    .post("/payment/request", e)
    .then((res) => res?.data)
    .catch((err) => console.log(err));

  return response;
};
