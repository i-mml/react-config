import { getCameraAll } from "./camera";
import { getDeviceAll } from "./devices";
import { getPlanAll } from "./plan";

export const fetchDashboardData = async () => {
  const [camerasList, planList, devicesList] = await Promise.all([
    getCameraAll().catch((err) => err),
    getPlanAll().catch((err) => err),
    getDeviceAll().catch((err) => err),
  ]);
  return { camerasList, planList, devicesList };
};
