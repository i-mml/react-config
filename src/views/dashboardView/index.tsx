
import s from './dashboard.module.scss';
import DashboardTopBox from './components/dashboardTopBox';
import StatusCartItem from './components/statusCartItem';
import DashboardMap from './components/dashboardMap';
import DashboardMiddleBox from './components/dashboardMiddleBox';
import { isMobile } from 'react-device-detect';
import DashboardMobileLinkBox from './components/dashboardMobileLinkBox';
import LineChart from '../../components/charts/lineCart';
import auth from '../../redux/reducers/auth';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { fetchDashboardData } from '../../api/services/dashboard';
import ChartsWrapper from './components/chartsWrapper';

const DashboardView = () => {
    const { data, isLoading } = useQuery('dashboard-all-services', fetchDashboardData);


    return (
        <div className={s.dashboardContainer}>
            <DashboardTopBox />
            <div className={s.statusesBox}>
                <StatusCartItem title='کل دستگاه ها' value={60} icon="users" />
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