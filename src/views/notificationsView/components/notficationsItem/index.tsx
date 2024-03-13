import React, { useState } from 'react'
import s from './style.module.scss';
import moment from 'moment-jalaali';
import StatusBox from '../../../../components/statusBox';


const NotificationItem = (props: any) => {
    const { message, message_raw, device, priority, downtimesince } = props
    const nowD = moment().format('jYYYY/jMM/jDD')
    const [isOpened, toggle] = useState(false)

    const regex = /<div class="status">|<div class="moreicon">|\/div>|>|<|;|<\/div>$/g;

    return (
        <div className={s.notifItemContainer} >
            <div className={s.titleBox} onClick={() => toggle(pre => !pre)}>
                <div className={s.title}>
                    <span className={s.titleValue}>
                        {device}
                    </span>
                    {priority === "5" && <StatusBox title='فوری' erorr />}
                </div>
                <img src='/images/icons/chevron-down.svg' className={`${s.collapseIcon} ${isOpened ? s.opened : ""}`} />
            </div>

            <div className={s.subTitleBox}>
                <div className={s.subTitle}>
                    {message?.replace(regex, '')}
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