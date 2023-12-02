import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://46.100.54.209:4747" });

export default axiosInstance;
