import React, { ReactNode } from 'react'
import s from './style.module.scss';
import StatusBox from '../../../../components/statusBox';

interface Iprops {
    title: string,
    onlineCount: number,
    offlineCount: number,
    data: any
}

const AllDeviceReportBox = (props: Iprops) => {
    const { title } = props

    return (
        <div className={s.container}>
            <div className={s.top}>
                <img className={s.icon} src="/images/icons/laptop-02.svg" />
            </div>
            <div className={s.bottom}>
                <div className={s.title}>
                    {title}
                </div>

                <div className={s.allDeviceBox}>
                    <div className={s.offline}>
                        <StatusBox active={false} title='آفلاین' />
                        <p>
                            {
                                props?.offlineCount
                            }
                        </p>
                    </div>
                    <div className={s.online}>
                        <StatusBox active={true} title='آنلاین' />
                        <p>
                            {
                                props?.onlineCount
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AllDeviceReportBox