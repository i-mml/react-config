import React from 'react'
import s from './style.module.scss';

interface IProps {
    title: string, value: number, increased: boolean
}

const UsedTraficItem = (props: IProps) => {
    const { title, value, increased } = props
    return (
        <div className={s.usedTraficItem}>
            <div className={s.top}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clip-path="url(#clip0_628_4237)">
                        <path d="M11.3333 0.666748L14 3.33341M14 3.33341L11.3333 6.00008M14 3.33341H4.66667C3.95942 3.33341 3.28115 3.61437 2.78105 4.11446C2.28095 4.61456 2 5.29284 2 6.00008V7.33341M4.66667 15.3334L2 12.6667M2 12.6667L4.66667 10.0001M2 12.6667H11.3333C12.0406 12.6667 12.7189 12.3858 13.219 11.8857C13.719 11.3856 14 10.7073 14 10.0001V8.66675" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_628_4237">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <div className={s.title}>
                    {title}
                </div>
            </div>
            <div className={`${s.percentNumber} ${increased ? s.red : s.green}`}>
                {value}
            </div>
            <div className={s.percentSlider} >
                <div className={`${s.percentSlierBar} ${increased ? s.redBg : s.greenBg}`} style={{ width: `${value / 1000 * 100}%` }}></div>
            </div>

        </div>
    )
}

export default UsedTraficItem