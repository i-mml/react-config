import { getCameraAll } from "./camera";
import { getPlanAll } from "./plan";

export const fetchDashboardData = async () => {
  const [camerasList, planList] = await Promise.all([
    getCameraAll().catch((err) => err),
    getPlanAll().catch((err) => err),
  ]);
  return { camerasList, planList };
};
