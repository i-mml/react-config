import { useSelector } from 'react-redux';
import DashboardView from '../views/dashboardView';
import { Navigate } from 'react-router-dom';

const HomePage = () => {
  const user = useSelector((state: any) => state?.auth?.data?.user);

  if (user?.role === 0) {
    return <Navigate to='/support' replace />
  }
  return (
    <>
      <DashboardView />
    </>)
}

export default HomePage