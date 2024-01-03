
import s from './dashboard.module.scss';
import DashboardTopBox from './components/dashboardTopBox';
import StatusCartItem from './components/statusCartItem';
import DashboardMap from './components/dashboardMap';
import DashboardMiddleBox from './components/dashboardMiddleBox';
import { isMobile } from 'react-device-detect';
import DashboardMobileLinkBox from './components/dashboardMobileLinkBox';
import LineChart from '../../components/charts/lineCart';
import { useQuery } from 'react-query';
import { fetchDashboardData, fetchSuperAdminData } from '../../api/services/dashboard';
import ChartsWrapper from './components/chartsWrapper';
import AllDeviceReportBox from './components/allDeviceReportBox';
import { useSelector } from 'react-redux';

const DashboardView = () => {
    const user = useSelector((state: any) => state?.auth?.data?.user);
    const queryKey = user?.role !== 1 ? 'dashboard-all-services' : 'super-admin-all-services'
    const queryFunc = user?.role !== 1 ? fetchDashboardData : fetchSuperAdminData

    const { data, isLoading } = useQuery(queryKey, queryFunc as any)




    return (
        <div className={s.dashboardContainer}>
            <DashboardTopBox />
            {user?.role !== 1 &&
                <div className={s.statusesBox}>
                    <AllDeviceReportBox title='کل دستگاه ها' offlineCount={60} onlineCount={33} />
                    <StatusCartItem title='تعداد کاربران wifi' value={33} icon="wifi" hasArrow arrowTitle='Ping' arrowType="up" />
                    <StatusCartItem title='UPTIMEدستگاه های مدیریتی' value={0} icon="zap-off" hasArrow arrowType="down" />
                    <StatusCartItem title='وضعیت اتصال به ISP' value={0} icon="zap-off" />
                </div>}
            {
                user?.role !== 1 && isMobile && <div className={s.mobileLinkWrapper}>
                    <DashboardMobileLinkBox
                        icon='/images/Computer.png'
                        link='/devices'
                        title='دستگاه‌های متصل'
                    />
                    <DashboardMobileLinkBox
                        icon='/images/Telescope.png'
                        link='/cameras'
                        title='دوربین‌ها'
                    />
                </div>
            }
            <DashboardMiddleBox data={data} />
            {user?.role !== 1 &&
                <>
                    <LineChart />
                    <ChartsWrapper />
                </>
            }
        </div>
    )
}

export default DashboardView