import axios from "axios";
import Cookies from "js-cookie";

// http://46.100.54.209:4747
// http://ns1.nport.ir:4747
const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

axiosInstance.interceptors.request.use(function (config) {
  const accessTokenValue = Cookies.get("access-token");
  const emsTokenValue = Cookies.get("ems-token");

  if (accessTokenValue) {
    config.headers["Authorization"] = accessTokenValue;
    config.headers["x-api-key"] = emsTokenValue;
  }
  return config;
});

export default axiosInstance;
