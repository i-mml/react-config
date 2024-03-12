import React from 'react'
import s from './style.module.scss';

interface Iprops {
    title: string,
    value: number,
    icon: "users" | "zap" | "zap-off" | "wifi"
    hasArrow?: boolean
    arrowType?: "up" | "down"
    arrowTitle?: string;
    halfWidth?: boolean;
    topBoxText?: string
}

const StatusCartItem = (props: Iprops) => {
    const { title, value, icon, hasArrow, halfWidth = false, topBoxText = "" } = props

    return (
        <div className={`${s.container} ${halfWidth ? s.halfWidth : ""}`}>
            <div className={s.top}>
                <img className={s.icon} src={`/images/icons/${icon}.svg`} />
                {topBoxText || ""}
            </div>

            <div className={s.bottom}>
                <div className={s.title}>
                    {title}
                </div>

                <div className={s.value}>

                    <div className={s.arrows}>
                        {
                            hasArrow &&
                            <div className={s.arrows}>
                                <img className={s.icon} src={`/images/icons/arrow-down.svg`} />
                                <img className={s.icon} src={`/images/icons/arrow-up.svg`} />
                            </div>
                        }
                        <span>{value}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StatusCartItem