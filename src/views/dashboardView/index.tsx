import React, { useContext } from 'react'
import { AuthContext } from '../../api/context';
import s from './dashboard.module.scss';
import DashboardTopBox from './components/dashboardTopBox';


const DashboardView = () => {
    const auth = useContext(AuthContext);
    console.log('auth', auth?.value)

    return (
        <div className={s.dashboardContainer}>
            <DashboardTopBox />
        </div>
    )
}

export default DashboardView