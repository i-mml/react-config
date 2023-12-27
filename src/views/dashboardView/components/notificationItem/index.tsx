import React, { useState } from 'react'
import s from './style.module.scss';
import moment from 'moment-jalaali';

const NotifListItem = ({ device_raw = "", subTitle = "", status = 0, date = "", message_raw = "", defaultShow = false }) => {
    const [isOpened, setIsOpened] = useState(defaultShow)
    const nowD = moment().format('jYYYY/jMM/jDD')

    return (
        <div className={s.notifItem} onClick={() => setIsOpened(prevState => !prevState)}>
            <div className={`${s.circle} ${status ? s.offCircle : ""}`}></div>
            <div className={s.content}>
                <div className={s.titleBox}>
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
                {isOpened &&
                    <div className={s.description}>
                        {message_raw}
                    </div>
                }
            </div>
        </div>
    )
}

export default NotifListItem