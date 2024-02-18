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
import axiosInstance from "../axiosConfig";

export const getActiveDevices = async () => {
  const response = await axiosInstance
    .get("/dashboard/active/devices")
    .then((res) => res?.data);

  return response;
};

export const getDashboardNetStatus = async () => {
  const response = await axiosInstance.get("/dashboard/net/status");

  return response;
};

export const getDashboardVlanConnection = async () => {
  const response = await axiosInstance.get("/dashboard/vlan/connection");

  return response;
};

export const fetchDashboardData = async (company_Id: number) => {
  const [
    camerasList,
    planList,
    devicesList,
    activeDevices,
    notificationsList,
    bannersList,
    upTime,
    healthStatus,
    netSTatus,
    dashboardNetStatus,
    dashboardVlanConnection,
  ] = await Promise.all([
    getCameraAll().catch((err) => err),
    getPlanAll(company_Id).catch((err) => err),
    getDeviceAll().catch((err) => err),
    getActiveDevices().catch((err) => err),
    getNotifications().catch((err) => err),
    getBannerAll().catch((err) => err),
    getChartUptime().catch((err) => err),
    getChartHealthStatus().catch((err) => err),
    getChartNetStatus().catch((err) => err),
    getDashboardNetStatus().catch((err) => err),
    getDashboardVlanConnection().catch((err) => err),
  ]);
  return {
    camerasList,
    planList,
    devicesList,
    activeDevices,
    notificationsList,
    bannersList,
    upTime,
    healthStatus,
    netSTatus,
    dashboardNetStatus,
    dashboardVlanConnection,
  };
};

export const fetchSuperAdminData = async () => {
  const [bannersList, companiesList] = await Promise.all([
    getBannerAll().catch((err) => err),
    getCompanyAll().catch((err) => err),
  ]);
  return { bannersList, companiesList };
};
