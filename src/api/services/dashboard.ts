import { getBannerAll } from "./banner";
import { getCameraAll } from "./camera";
import { getChartUptime } from "./chart";
import { getCompanyAll } from "./company";
import { getDeviceAll } from "./devices";
import { getNotifications } from "./notifications";
import { getPlanAll } from "./plan";

export const fetchDashboardData = async () => {
  const [
    camerasList,
    planList,
    devicesList,
    notificationsList,
    bannersList,
    upTime,
  ] = await Promise.all([
    getCameraAll().catch((err) => err),
    getPlanAll().catch((err) => err),
    getDeviceAll().catch((err) => err),
    getNotifications().catch((err) => err),
    getBannerAll().catch((err) => err),
    getChartUptime().catch((err) => err),
  ]);
  return {
    camerasList,
    planList,
    devicesList,
    notificationsList,
    bannersList,
    upTime,
  };
};

export const fetchSuperAdminData = async () => {
  const [bannersList, companiesList] = await Promise.all([
    getBannerAll().catch((err) => err),
    getCompanyAll().catch((err) => err),
  ]);
  return { bannersList, companiesList };
};
