import React from 'react'
import s from './style.module.scss';

interface Iprops {
    title: string,
    value: number,
    icon: "users" | "zap" | "zap-off"
    hasArrow?: boolean
    arrowType?: "up" | "down"
}

const StatusCartItem = (props: Iprops) => {
    const { title, value, icon, hasArrow, arrowType } = props
    return (
        <div className={s.container}>
            <div className={s.top}>
                <img className={s.icon} src={`/images/icons/${icon}.svg`} />
                {hasArrow &&
                    <img className={s.icon} src={`/images/icons/arrow-${arrowType}.svg`} />
                }

            </div>

            <div className={s.bottom}>
                <div className={s.title}>
                    {title}
                </div>

                <div className={s.value}>
                    {value}
                </div>
            </div>

        </div>
    )
}

export default StatusCartItem