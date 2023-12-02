import Cookies from "js-cookie";
import { LoginFields } from "../../../types/api/auth";
import axiosInstance from "../../axiosConfig";
import { redirect } from "react-router-dom";

export const LoginService = async (e: LoginFields) => {
  const response = await axiosInstance
    .post("/login", e)
    .finally(() => Cookies.set("ems-token", "emsTokenValue", { path: "/" }));

  return response;
};

export const LogoutService = async () => {
  await axiosInstance("/user/logout").finally(() => {
    Cookies.remove("ems-token");
  });
};
