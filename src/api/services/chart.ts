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

export const getChartNetStatus = async () => {
  const response = await axiosInstance.get("/chart/netstatus");

  return response;
};

export const getChartHealthStorage = async () => {
  const response = await axiosInstance.get("/chart/health/storage");

  return response;
};

export const getChartCpus = async () => {
  const response = await axiosInstance.get("/chart/cpus");

  return response;
};

export const getChartVirtualMachines = async () => {
  const response = await axiosInstance.get("/chart/virtual/machines");

  return response;
};

export const getChartGraph = async () => {
  const response = await axiosInstance.get("/chart/graph");

  return response;
};

export const fetchChartsData = async () => {
  const [healthStorage, cpusStatus, virtualMachines, chartGraph] =
    await Promise.all([
      getChartHealthStorage()?.catch((err) => err),
      getChartCpus()?.catch((err) => err),
      getChartVirtualMachines()?.catch((err) => err),
      getChartGraph()?.catch((err) => err),
    ]);
  return {
    healthStorage,
    cpusStatus,
    virtualMachines,
    chartGraph,
  };
};
