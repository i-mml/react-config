import Cookies from "js-cookie";
import { LoginFields } from "../../../types/api/auth";
import axiosInstance from "../../axiosConfig";
import axios from "axios";

export const LoginService = async (e: LoginFields) => {
  const response = await axios
    .post(process.env.REACT_APP_BASE_URL + "/login", e)
    .then((res) => res.data);

  return response;
};

export const LogoutService = async () => {
  await axiosInstance("/user/logout").finally(() => {
    Cookies.remove("ems-token");
  });
};
