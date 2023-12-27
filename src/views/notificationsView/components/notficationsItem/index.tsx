import React, { useState } from 'react'
import s from './style.module.scss';
import moment from 'moment-jalaali';

interface IProps {
    id: number,
    device_raw: string,
    message_raw: string,

}

const NotificationItem = (props: IProps) => {
    const { device_raw, message_raw } = props
    const nowD = moment().format('jYYYY/jMM/jDD')
    const [isOpened, toggle] = useState(false)

    return (
        <div className={s.notifItemContainer} >
            <div className={s.titleBox} onClick={() => toggle(pre => !pre)}>
                <div className={s.title}>
                    {device_raw}
                </div>
                <img src='/images/icons/chevron-down.svg' className={`${s.collapseIcon} ${isOpened ? s.opened : ""}`} />
            </div>

            <div className={s.subTitleBox}>
                <div className={s.subTitle}>
                    {device_raw}
                </div>
                <div className={s.date}>
                    {nowD}
                </div>
            </div>
            {
                isOpened &&
                <div className={s.description}>
                    {message_raw}
                </div>
            }
        </div>
    )
}

export default NotificationItem