import axiosInstance from "../axiosConfig";

export const getChartUptime = async () => {
  const response = await axiosInstance
    .get("/chart/uptime")
    .then((res) => res?.data);

  return response;
};

export const getChartHealthStatus = async () => {
  const response = await axiosInstance.get("/chart/health/status");

  return response;
};
