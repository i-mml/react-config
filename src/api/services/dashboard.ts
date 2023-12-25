import { getCameraAll } from "./camera";

export const fetchDashboardData = async () => {
  const [camerasList] = await Promise.all([getCameraAll().catch((err) => err)]);
  return { camerasList };
};
