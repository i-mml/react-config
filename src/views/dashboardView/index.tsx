import { lazy } from 'react';
import s from './dashboard.module.scss';
import DashboardTopBox from './components/dashboardTopBox';
import StatusCartItem from './components/statusCartItem';
import { isMobile } from 'react-device-detect';
import { useQuery } from 'react-query';
import { fetchDashboardData, fetchSuperAdminData } from '../../api/services/dashboard';
import { useSelector } from 'react-redux';
import { fetchChartsData } from '../../api/services/chart';

const CompaniesView = lazy(() => import('../companiesView'));
const BannersTable = lazy(() => import('../../components/bannersTable'));
const AllDeviceReportBox = lazy(() => import('./components/allDeviceReportBox'));
const ChartsWrapper = lazy(() => import('./components/chartsWrapper'));
const DashboardMobileLinkBox = lazy(() => import('./components/dashboardMobileLinkBox'));
const LineChart = lazy(() => import('../../components/charts/lineCart'));
const DashboardMiddleBox = lazy(() => import('./components/dashboardMiddleBox'));



const DashboardView = () => {
    const user = useSelector((state: any) => state?.auth?.data?.user);
    const authData = useSelector((state: any) => state?.auth?.data);
    const queryKey = user?.role !== 1 ? 'dashboard-all-services' : 'super-admin-all-services'
    const queryFunc = user?.role !== 1 ? () => fetchDashboardData(authData?.admin?.company_Id) : fetchSuperAdminData

    const { data, isLoading } = useQuery<any>(queryKey, queryFunc as any)
    const { data: ChartsData, isLoading: chartLoading } = useQuery<any>('get-charts-data', user?.role !== 1 ? fetchChartsData : () => { })
    return (
        <div className={s.dashboardContainer}>
            <DashboardTopBox data={data} />
            {user?.role === 1 && <CompaniesView limitShow />}
            {user?.role === 1 && <BannersTable />}
            {user?.role !== 1 &&
                <div className={s.statusesBox}>
                    <AllDeviceReportBox title='کل دستگاه ها' offlineCount={60} onlineCount={33} data={data} />
                    <StatusCartItem title='ترافیک پهنا باند' value={data?.dashboardNetStatus?.data?.data?.sensors?.[0]?.lastvalue} icon="wifi" hasArrow />
                    <StatusCartItem title='وضعیت اتصال VLANS ها' value={data?.dashboardVlanConnection?.data?.online?.sensors?.filter((item: any) => item?.status === "Up")?.length || 0} icon="zap-off" />
                    <StatusCartItem title='وضعیت اتصال به ISP' value={data?.dashboardPing?.data?.data?.sensors?.[0]?.lastvalue} icon="zap-off" />
                </div>}
            {
                user?.role !== 1 && isMobile && <div className={s.mobileLinkWrapper}>
                    <DashboardMobileLinkBox
                        icon='/images/connectedDeviceMobile.png'
                        link='/devices'
                        title='دستگاه‌های متصل'
                    />
                    <DashboardMobileLinkBox
                        icon='/images/CamerasMobile.png'
                        link='/cameras'
                        title='دوربین‌ها'
                    />
                </div>
            }
            {user?.role !== 1 && <DashboardMiddleBox data={data} chartsData={ChartsData} />}
            {user?.role !== 1 && !chartLoading &&
                <>
                    <LineChart data={ChartsData} />
                    <ChartsWrapper data={ChartsData} />
                </>
            }
        </div>
    )
}

export default DashboardView