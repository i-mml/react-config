
import s from './dashboard.module.scss';
import DashboardTopBox from './components/dashboardTopBox';
import StatusCartItem from './components/statusCartItem';
import DashboardMap from './components/dashboardMap';
import DashboardMiddleBox from './components/dashboardMiddleBox';
import { isMobile } from 'react-device-detect';
import DashboardMobileLinkBox from './components/dashboardMobileLinkBox';
import LineChart from '../../components/charts/lineCart';
import { useQuery } from 'react-query';
import { fetchDashboardData } from '../../api/services/dashboard';
import ChartsWrapper from './components/chartsWrapper';
import AllDeviceReportBox from './components/allDeviceReportBox';

const DashboardView = () => {
    const { data, isLoading } = useQuery('dashboard-all-services', fetchDashboardData);


    return (
        <div className={s.dashboardContainer}>
            <DashboardTopBox />
            <div className={s.statusesBox}>
                <AllDeviceReportBox title='کل دستگاه ها' offlineCount={60} onlineCount={33} />
                <StatusCartItem title='تعداد کاربران wifi' value={33} icon="zap" hasArrow arrowType="up" />
                <StatusCartItem title='UPTIMEدستگاه های مدیریتی' value={0} icon="zap-off" hasArrow arrowType="down" />
                <StatusCartItem title='وضعیت اتصال به ISP' value={0} icon="zap-off" />
            </div>
            {
                isMobile ? <div className={s.mobileLinkWrapper}>
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
                </div> :
                    <DashboardMap planList={data?.planList} />
            }
            <DashboardMiddleBox data={data} />
            <LineChart />
            <ChartsWrapper />
        </div>
    )
}

export default DashboardView