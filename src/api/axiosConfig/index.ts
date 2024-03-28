import axios from "axios";
import Cookies from "js-cookie";

// http://46.100.54.209:4747
// http://ns1.nport.ir:4747
const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

axiosInstance.interceptors.request.use(function (config) {
  const accessTokenValue = Cookies.get("access-token");
  const emsTokenValue = Cookies.get("ems-token");

  const urlParams = new URLSearchParams(window.location.search);
  const guestToken = urlParams.get("guestToken");

  if (accessTokenValue) {
    config.headers["Authorization"] = accessTokenValue;
  }

  if (guestToken) {
    config.headers["x-api-token"] = guestToken;
  } else {
    config.headers["x-api-key"] = emsTokenValue;
  }

  return config;
});

export default axiosInstance;
