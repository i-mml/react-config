import React, { ReactNode } from 'react'
import s from './style.module.scss';
import StatusBox from '../../../../components/statusBox';

interface Iprops {
    title: string,
    onlineCount: number,
    offlineCount: number
}

const AllDeviceReportBox = (props: Iprops) => {
    const { title, onlineCount, offlineCount } = props
    return (
        <div className={s.container}>
            <div className={s.top}>
                <img className={s.icon} src="/images/icons/users.svg" />
            </div>
            <div className={s.bottom}>
                <div className={s.title}>
                    {title}
                </div>

                <div className={s.allDeviceBox}>
                    <div>
                        <StatusBox active={false} title='آفلاین' />
                        <p>60 نفر</p>
                    </div>
                    <div>
                        <StatusBox active={true} title='آنلاین' />
                        <p>33 نفر</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AllDeviceReportBox