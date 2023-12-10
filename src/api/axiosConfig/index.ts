import axios from "axios";

// http://46.100.54.209:4747
const axiosInstance = axios.create({ baseURL: "http://ns1.nport.ir" });

export default axiosInstance;
