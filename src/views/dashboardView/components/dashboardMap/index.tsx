import React from 'react'
import s from "./style.module.scss"

const DashboardMap = () => {
    return (
        <div className={s.dashboardMapContainer}>
            <div className={s.mapTitleBox}>
                <img src='/images/icons/blackMap.svg' className={s.mapIcon} />
                <h4 className={s.mapTitle}>
                    نقشه
                </h4>

            </div>
        </div>
    )
}

export default DashboardMap