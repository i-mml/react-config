import React, { useState } from 'react'
import s from './style.module.scss';
import moment from 'moment-jalaali';
import StatusBox from '../../../../components/statusBox';

const NotifListItem = ({ device = "", message = "", priority = "", downtimesince = "", defaultShow = false }) => {
    const [isOpened, setIsOpened] = useState(defaultShow)
    const nowD = moment().format('jYYYY/jMM/jDD')

    const regex = /<div class="status">|<div class="moreicon">|\/div>|<\/div>$/g;

    return (
        <div className={s.notifItem} onClick={() => setIsOpened(prevState => !prevState)}>
            {/* ${status ? s.offCircle : ""} */}
            <div className={`${s.circle} `}></div>
            <div className={s.content}>
                <div className={s.titleBox}>
                    <div className={s.title}>
                        <span className={s.titleValue}>
                            {device}
                        </span>
                        {priority === "5" && <StatusBox title='فوری' erorr />}
                    </div>
                    <img src='/images/icons/chevron-down.svg' className={`${s.collapseIcon} ${isOpened ? "" : s.opened}`} />
                </div>
                <div className={s.subTitleBox}>
                    <div className={s.subTitle}>
                        downtimesince: {downtimesince}
                    </div>
                    <div className={s.date}>
                        {nowD}
                    </div>
                </div>
                {isOpened &&
                    <div className={s.description}>
                        {message?.replace(regex, '')}

                    </div>
                }
            </div>
        </div>
    )
}

export default NotifListItem