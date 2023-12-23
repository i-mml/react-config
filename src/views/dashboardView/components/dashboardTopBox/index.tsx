import React from 'react'
import s from './style.module.scss';
import UsedTraficItem from '../usedTrafixItem';

const DashboardTopBox = () => {
    return (
        <div className={s.dashboardTopBox}>
            <div className={s.right}>
                <h3 className={s.title}>
                    سارا عزیز، خوش آمدید.
                </h3>
                <div className={s.subTitle}>
                    در پنل کاربری خود میتوانید آنالیز و ردیابی وسایل الکترونیکی خود را ببینید.
                </div>
            </div>
            <div className={s.left}>
                <UsedTraficItem />
                <UsedTraficItem />
            </div>
        </div>
    )
}

export default DashboardTopBox