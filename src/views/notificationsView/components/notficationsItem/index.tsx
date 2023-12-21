import React, { useState } from 'react'
import s from './style.module.scss';

interface IProps {
    id: number,
    title: string,
    cameraName: string,
    date: string,
    description: string,

}

const NotificationItem = (props: IProps) => {
    const { title, cameraName, date, description } = props

    const [isOpened, toggle] = useState(false)

    return (
        <div className={s.notifItemContainer} onClick={() => toggle(pre => !pre)}>
            <div className={s.titleBox}>
                <div className={s.title}>
                    {title}
                </div>
                <img src='/images/icons/chevron-down.svg' className={`${s.collapseIcon} ${isOpened ? s.opened : ""}`} />
            </div>

            <div className={s.subTitleBox}>
                <div className={s.subTitle}>
                    {cameraName}
                </div>
                <div className={s.date}>
                    {date}
                </div>
            </div>
            {
                isOpened &&
                <div className={s.description}>
                    {description}
                </div>
            }
        </div>
    )
}

export default NotificationItem