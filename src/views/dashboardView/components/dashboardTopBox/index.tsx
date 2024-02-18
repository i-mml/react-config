import React from 'react'
import s from './style.module.scss';
import UsedTraficItem from '../usedTrafixItem';
import { rolesConsts } from '../../../../constants/user';
import { useSelector } from 'react-redux';

const DashboardTopBox = ({ data }: any) => {
    const user = useSelector((state: any) => state?.auth?.data?.user);

    return (
        <div className={s.dashboardTopBox}>
            <div className={s.right}>
                <h3 className={s.title}>
                    {`${user?.first_name || ""} ${user?.last_name || ""}`} عزیز، خوش آمدید.
                </h3>
                <div className={s.subTitle}>
                    در داشبورد نت پورت می توانید وضعیت شبکه خود را ببینید.
                </div>
            </div>
            {user?.role !== 1 &&
                <div className={s.left}>
                    <UsedTraficItem id={1} title="پیام‌ها و هشدارهای مهم" value={data?.notificationsList?.treesize || 0} increased={true} hasPercent={false} />
                    <UsedTraficItem id={2} title='سلامت اتصال سرویس' value={data?.healthStatus?.data?.data?.Alarms || 0} increased={false} hasPercent />
                </div>}
        </div>
    )
}

export default DashboardTopBox