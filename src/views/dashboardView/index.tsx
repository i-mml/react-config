import React, { useContext } from 'react'
import { AuthContext } from '../../api/context';
import s from './dashboard.module.scss';
import DashboardTopBox from './components/dashboardTopBox';
import StatusCartItem from './components/statusCartItem';


const DashboardView = () => {
    const auth = useContext(AuthContext);
    console.log('auth', auth?.value)

    return (
        <div className={s.dashboardContainer}>
            <DashboardTopBox />
            <div className={s.statusesBox}>
                <StatusCartItem title='تعداد کل کاربران' value={60} icon="users" />
                <StatusCartItem title='کاربران فعال' value={33} icon="zap" hasArrow arrowType="up" />
                <StatusCartItem title='کاربران غیر فعال' value={0} icon="zap-off" hasArrow arrowType="down" />
                <StatusCartItem title='نمونه' value={0} icon="zap-off" />

            </div>
        </div>
    )
}

export default DashboardView