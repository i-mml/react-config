import React, { useState } from 'react'
import s from './style.module.scss';

const NotifListItem = ({ title = "", subTitle = "", status = 0, date = "", description = "", defaultShow = false }) => {
    const [isOpened, setIsOpened] = useState(defaultShow)
    return (
        <div className={s.notifItem} onClick={() => setIsOpened(prevState => !prevState)}>
            <div className={`${s.circle} ${status ? s.offCircle : ""}`}></div>
            <div className={s.content}>
                <div className={s.titleBox}>
                    <div className={s.title}>
                        {title}
                    </div>
                    <img src='/images/icons/chevron-down.svg' className={`${s.collapseIcon} ${isOpened ? s.opened : ""}`} />
                </div>
                <div className={s.subTitleBox}>
                    <div className={s.subTitle}>
                        {subTitle}
                    </div>
                    <div className={s.date}>
                        {date}
                    </div>
                </div>
                {isOpened &&
                    <div className={s.description}>
                        {description}
                    </div>
                }
            </div>
        </div>
    )
}

export default NotifListItem