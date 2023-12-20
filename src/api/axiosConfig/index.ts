import axios from "axios";

// http://46.100.54.209:4747
const axiosInstance = axios.create({ baseURL: "http://46.100.54.209:80" });

export default axiosInstance;
