import React from 'react'
import s from './style.module.scss';

interface Iprops {
    title: string,
    value: number,
    icon: "users" | "zap" | "zap-off" | "wifi"
    hasArrow?: boolean
    arrowType?: "up" | "down"
    arrowTitle?: string;
}

const StatusCartItem = (props: Iprops) => {
    const { title, value, icon, hasArrow, arrowType, arrowTitle } = props
    return (
        <div className={s.container}>
            <div className={s.top}>
                <img className={s.icon} src={`/images/icons/${icon}.svg`} />
                {hasArrow &&
                    <div className={s.arrowBox}>
                        {arrowTitle &&
                            <div className={s.arrowTitle}>Ping</div>
                        }
                        <img className={s.icon} src={`/images/icons/arrow-${arrowType}.svg`} />
                    </div>
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