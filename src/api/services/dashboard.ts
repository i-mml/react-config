import { useSelector } from "react-redux";
import { getBannerAll } from "./banner";
import { getCameraAll } from "./camera";
import {
  getChartHealthStatus,
  getChartNetStatus,
  getChartUptime,
  getChartHealthStorage,
  getChartCpus,
  getChartVirtualMachines,
} from "./chart";
import { getCompanyAll } from "./company";
import { getDeviceAll } from "./devices";
import { getNotifications } from "./notifications";
import { getPlanAll } from "./plan";

export const fetchDashboardData = async (company_Id: number) => {
  const [
    camerasList,
    planList,
    devicesList,
    notificationsList,
    bannersList,
    upTime,
    healthStatus,
    netSTatus,
    healthStorage,
    cpusStatus,
    virtualMachines,
  ] = await Promise.all([
    getCameraAll().catch((err) => err),
    getPlanAll(company_Id).catch((err) => err),
    getDeviceAll().catch((err) => err),
    getNotifications().catch((err) => err),
    getBannerAll().catch((err) => err),
    getChartUptime().catch((err) => err),
    getChartHealthStatus().catch((err) => err),
    getChartNetStatus().catch((err) => err),
    getChartHealthStorage()?.catch((err) => err),
    getChartCpus()?.catch((err) => err),
    getChartVirtualMachines()?.catch((err) => err),
  ]);
  return {
    camerasList,
    planList,
    devicesList,
    notificationsList,
    bannersList,
    upTime,
    healthStatus,
    netSTatus,
    healthStorage,
    cpusStatus,
    virtualMachines,
  };
};

export const fetchSuperAdminData = async () => {
  const [bannersList, companiesList] = await Promise.all([
    getBannerAll().catch((err) => err),
    getCompanyAll().catch((err) => err),
  ]);
  return { bannersList, companiesList };
};
