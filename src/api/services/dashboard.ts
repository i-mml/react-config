import { getBannerAll } from "./banner";
import { getCameraAll } from "./camera";
import { getDeviceAll } from "./devices";
import { getNotifications } from "./notifications";
import { getPlanAll } from "./plan";

export const fetchDashboardData = async () => {
  const [camerasList, planList, devicesList, notificationsList, bannersList] =
    await Promise.all([
      getCameraAll().catch((err) => err),
      getPlanAll().catch((err) => err),
      getDeviceAll().catch((err) => err),
      getNotifications().catch((err) => err),
      getBannerAll().catch((err) => err),
    ]);
  return { camerasList, planList, devicesList, notificationsList, bannersList };
};
