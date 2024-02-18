import React, { useState } from 'react'
import s from './style.module.scss';
import moment from 'moment-jalaali';
import StatusBox from '../../../../components/statusBox';


const NotificationItem = (props: any) => {
    const { status, message_raw, sensor, priority, downtimesince } = props
    const nowD = moment().format('jYYYY/jMM/jDD')
    const [isOpened, toggle] = useState(false)

    return (
        <div className={s.notifItemContainer} >
            <div className={s.titleBox} onClick={() => toggle(pre => !pre)}>
                <div className={s.title}>
                    {sensor} {priority === "5" && <StatusBox title='فوری' erorr />}
                </div>
                <img src='/images/icons/chevron-down.svg' className={`${s.collapseIcon} ${isOpened ? s.opened : ""}`} />
            </div>

            <div className={s.subTitleBox}>
                <div className={s.subTitle}>
                    {status}
                </div>
                <div className={s.date}>
                    {nowD}
                </div>
            </div>
            {
                isOpened &&
                <div className={s.description}>
                    downtimesince: {downtimesince}
                </div>
            }
        </div>
    )
}

export default NotificationItem