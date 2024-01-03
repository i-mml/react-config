import React from 'react'
import s from './style.module.scss';
import UsedTraficItem from '../usedTrafixItem';
import { rolesConsts } from '../../../../constants/user';
import { useSelector } from 'react-redux';

const DashboardTopBox = () => {
    const user = useSelector((state: any) => state?.auth?.data?.user);

    return (
        <div className={s.dashboardTopBox}>
            <div className={s.right}>
                <h3 className={s.title}>
                    {rolesConsts[user?.role]?.name} عزیز، خوش آمدید.
                </h3>
                <div className={s.subTitle}>
                    در داشبورد نت پورت می توانید وضعیت شبکه خود را ببینید.
                </div>
            </div>
            {user?.role !== 1 &&
                <div className={s.left}>
                    <UsedTraficItem title="پیام‌ها و هشدارهای مهم" value={24} increased={true} />
                    <UsedTraficItem title='سلامت شبکه' value={24} increased={false} />
                </div>}
        </div>
    )
}

export default DashboardTopBox