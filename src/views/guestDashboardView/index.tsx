import { lazy } from 'react';
import s from './dashboard.module.scss';
import DashboardTopBox from './components/dashboardTopBox';
import StatusCartItem from './components/statusCartItem';
import { isMobile } from 'react-device-detect';
import { useQuery } from 'react-query';
import { fetchDashboardData, fetchSuperAdminData } from '../../api/services/dashboard';
import { useSelector } from 'react-redux';
import { fetchChartsData } from '../../api/services/chart';
import { useSearchParams } from 'react-router-dom';

const CompaniesView = lazy(() => import('../companiesView'));
const BannersTable = lazy(() => import('../../components/bannersTable'));
const AllDeviceReportBox = lazy(() => import('./components/allDeviceReportBox'));
const ChartsWrapper = lazy(() => import('./components/chartsWrapper'));
const DashboardMobileLinkBox = lazy(() => import('./components/dashboardMobileLinkBox'));
const LineChart = lazy(() => import('../../components/charts/lineCart'));
const DashboardMiddleBox = lazy(() => import('./components/dashboardMiddleBox'));

const GuestDashboardView = () => {
    const [searchParams] = useSearchParams();
    const guestId = searchParams?.get("guestId")
    const queryKey = 'dashboard-all-services'
    const queryFunc = () => fetchDashboardData(Number(guestId))

    const { data, isLoading } = useQuery<any>(queryKey, queryFunc as any)
    const { data: ChartsData, isLoading: chartLoading } = useQuery<any>('get-charts-data', fetchChartsData)
    return (
        <div className={s.dashboardContainer}>
            <DashboardTopBox data={data} />

            <div className={s.statusesBox}>
                <AllDeviceReportBox title='کل دستگاه ها' offlineCount={data?.activeDevices?.offline_devices?.treesize || 0} onlineCount={data?.activeDevices?.online_devices?.treesize || 0} data={data} />
                <StatusCartItem title='ترافیک پهنا باند' value={data?.dashboardNetStatus?.data?.data?.sensors?.[0]?.lastvalue} icon="wifi" hasArrow />
                <AllDeviceReportBox title='وضعیت اتصال VLANS ها' offlineCount={data?.dashboardVlanConnection?.data?.offline?.sensors?.filter((item: any) => item?.status === "Up")?.length || 0} onlineCount={data?.dashboardVlanConnection?.data?.online?.sensors?.filter((item: any) => item?.status === "Up")?.length || 0} data={data} />
                <StatusCartItem title='وضعیت اتصال به ISP' value={data?.dashboardPing?.data?.data?.sensors?.[0]?.lastvalue} icon="zap-off" topBoxText='PING' />
            </div>
            {
                isMobile && <div className={s.mobileLinkWrapper}>
                    <DashboardMobileLinkBox
                        icon='/images/icons/devices-list-icon.svg'
                        link='/devices'
                        title='دستگاه‌های متصل'
                    />
                    <DashboardMobileLinkBox
                        icon='/images/icons/camera-list-icon.svg'
                        link='/cameras'
                        title='دوربین‌ها'
                    />
                </div>
            }
            <DashboardMiddleBox data={data} chartsData={ChartsData} />
            {!chartLoading &&
                <>
                    <LineChart data={ChartsData} />
                    <ChartsWrapper data={data} chartsData={ChartsData} />
                </>
            }
        </div>
    )
}

export default GuestDashboardView